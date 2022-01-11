const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const db = require("../../config/keys").mongoURI;

const Question = require('../../models/Question');
const Answer = require('../../models/Answer');
const User = require('../../models/User');
const validateQuestionInput = require('../../validation/question');


router.get('/next', passport.authenticate('jwt', { session: false }), (req, res) => {
  //correctly grabs the answers that user has gotten
  Answer.find({user: req.user})
    .then(answers => {
      let answersQuestions = answers.map(answer => (
        answer.question._id
      ))
      Question.find({_id: {$nin: answersQuestions}, user: { $nin: [req.user]}, active: true})
      //answer.question_id comes back undefined
    .sort({ date: -1 }).limit(1)
    .then(questions => res.json(questions))
    .catch(err => 
        res.status(404).json({ noquestionsfound: 'No questions found' })
    );
    })
    .catch(err => 
      res.status(404).json({ noquestionsfound: 'No questions found from that user' })
    );
});


// user specific questions
router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Question.find({user: req.user})
        .sort({ date: -1 })
        .then(questions => res.json(questions))
        .catch(err =>
            res.status(404).json({ noquestionsfound: 'No questions found from that user' }
        )
    );
});

// question lookup by id
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(err =>
            res.status(404).json({ noquestionfound: 'No question found with that ID' })
        );
});

//reactivate question
router.patch('/:id/reactivate', (req, res) => {
  Question.findByIdAndUpdate(req.params.id,
    {
      active: true
    },
    {new: true}
    )
    .then(question => {
      return res.json(question)})
    .catch(err =>
        res.status(404).json({ noquestionfound: 'No question found with that ID' })
    );
})

router.patch('/:id/deactivate', (req, res) => {
  let yesCount = 100; noCount = 100; totalCount = 100; majority =  null
  Question.findById(req.params.id)
  .then( question => {
  Answer.find({question: question})
  
    .then(answers => {
      totalCount = answers.length
      yesCount = answers.filter(answer => answer.input === true).length
      noCount = answers.filter(answer => answer.input === false).length
      if (yesCount > noCount) {
        majority = true
      }else if (yesCount < noCount) {
        majority = false
      }
       Question.findByIdAndUpdate(req.params.id,
        {
          active: false,
          majority,
          total: totalCount,
          yes: yesCount,
          no: noCount
        },
        {new: true}
      )
      .then(question => {
        return res.json(question)})
      .catch(err =>
          res.status(404).json({ noquestionfound: 'No question found with that ID' })
      );
    })})
});


// create new question
router.post('/',
    passport.authenticate('jwt', { session: false }), (req, res) => {
      const { errors, isValid } = validateQuestionInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const newQuestion = new Question({
        text: req.body.text,
        user: req.user,
        active: req.body.active
      });
  
      newQuestion.save().then(question => res.json(question));
    }
  );

  
  router.delete('/:id/delete', (req, res) => {
    Question.findByIdAndDelete(req.params.id,
      (err) => res.json(err || "Question Deleted")
      )
  })

  module.exports = router;
