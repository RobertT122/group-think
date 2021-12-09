const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Answer = require('../../models/Answer');


// user specific answers
router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Answer.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(answers => res.json(answers))
        .catch(err =>
            res.status(404).json({ noanswersfound: 'No answers found from that user' }
        )
    );
});

// by question
router.get('/question/:question_id', (req, res) => {
    Answer.find({user: req.params.question_id})
        .sort({ date: -1 })
        .then(answers => res.json(answers))
        .catch(err =>
            res.status(404).json({ noanswersfound: 'No answers found for that question' }
        )
    );
});

// create new answer
router.post('/',
    passport.authenticate('jwt', { session: false }), (req, res) => {
  
      const newAnswer = new Answer({
        input: req.body.input,
        user: req.user,
        question: req.body.question
        // question either needs to be .question or .body.question determine from form
      });
  
      newAnswer.save().then(answer => res.json(answer));
    }
  );


  module.exports = router