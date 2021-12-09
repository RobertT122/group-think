const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Question = require('../../models/Question');
const validateQuestionInput = require('../../validation/question');

// index all questions
router.get('/', (req, res) => {
    Question.find()
        .sort({ date: -1 })
        .then(questions => res.json(questions))
        .catch(err => res.status(404).json({ noquestionsfound: 'No questions found' }));
});

// user specific questions
router.get('/users/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    
  console.log(req.user)

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

router.patch('/:id/update', (req, res) => {
  Question.findByIdAndUpdate(req.params.id,
      {
        text: req.body.text,
        // user: req.user.id,
        // active: true
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
      console.log(req.user)
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