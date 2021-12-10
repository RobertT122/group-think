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


  Answer.find({user: req.user})
    .then(answer => {
      Question.find({_id: {$nin: [answer.question_id]}, user: { $nin: [req.user]}, active: true})
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

router.patch('/:id/deactivate', (req, res) => {
  Question.findByIdAndUpdate(req.params.id,
      {
        active: false
      }
    )
      .then(question => res.json(question))
      .catch(err =>
          res.status(404).json({ noquestionfound: 'No question found with that ID' })
      );
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

  module.exports = router;
  // test