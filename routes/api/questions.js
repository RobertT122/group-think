const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const db = require("../../config/keys").mongoURI;
const ObjectID = require("mongodb").ObjectID

const Question = require('../../models/Question');
const Answer = require('../../models/Answer');
const User = require('../../models/User');
const validateQuestionInput = require('../../validation/question');


router.get('/next', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log("searching")
  console.log(req.user._id)
  //correctly grabs the answers that user has gotten
  Answer.find({user: req.user})
    .then(answers => {
      let answersQuestions = answers.map(answer => (
        answer.question._id
      ))
      Question.find({_id: {$nin: answersQuestions}, user: { $nin: [req.user]}, active: true})
      //answer.question_id comes back undefined
    .sort({ date: -1 })
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

router.patch('/:id/deactivate', (req, res) => {
  console.log(req.params.id)
  let yesCount = 100; noCount = 100; totalCount = 100; majority =  null
  Answer.find({question: {_id: req.params.id}})
  
    .then(answers => {
      totalCount = answers.length
      console.log(totalCount)
      yesCount = answers.filter(answer => answer.input === true).length
      console.log(yesCount)
      noCount = answers.filter(answer => answer.input === false).length
      console.log(noCount)
      if (yesCount > noCount) {
        majority = true
      }else if (yesCount < noCount) {
        majority = false
      }
      console.log(majority)
      Question.findByIdAndUpdate(req.params.id,
        {
          active: false,
          majority,
          total: totalCount,
          yes: yesCount,
          no: noCount
        }
      )
      .then(question => res.json(question))
      .catch(err =>
          res.status(404).json({ noquestionfound: 'No question found with that ID' })
      );
    })
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

  router.get('/score/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("test")
  
    let allAnswers
    
    Answer.find({user: req.user})
      .then( answers => {
        allAnswers = answers
        let answersQuestions = answers.map( answer => answer.question._id)
        Question.find({_id: {$in: answersQuestions}, active: false})
          .then( questions => {
            let total = 0
            questions.forEach(question => {
              answer = allAnswers.find(answer => answer.question._id.toString() === question._id.toString())
              if (answer.input === question.majority) {
                total += answer.weight 
              } else {
                total -= answer.weight
              }
              return res.json(total)
            })
          })
      })
  
  
  })




  module.exports = router;
  // test