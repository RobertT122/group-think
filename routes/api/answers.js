const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Answer = require('../../models/Answer');
const validateAnswerInput = require('../../validation/answer');

// index all answers
router.get('/', (req, res) => {
    Answer.find()
        .sort({ date: -1 })
        .then(answers => res.json(answers))
        .catch(err => res.status(404).json({ noanswersfound: 'No answers found' }));
});

// user specific answers
router.get('/user/:user_id', (req, res) => {
    Answer.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(answers => res.json(answers))
        .catch(err =>
            res.status(404).json({ noanswersfound: 'No answers found from that user' }
        )
    );
});

// by question
router.get('/quesiton/:question_id', (req, res) => {
    Answer.find({user: req.params.question_id})
        .sort({ date: -1 })
        .then(answers => res.json(answers))
        .catch(err =>
            res.status(404).json({ noanswersfound: 'No answers found for that question' }
        )
    );
});

// answer lookup by id
router.get('/:id', (req, res) => {
    Answer.findById(req.params.id)
        .then(answer => res.json(answer))
        .catch(err =>
            res.status(404).json({ noanswerfound: 'No answer found with that ID' })
        );
});

router.patch('/:id/update', (req, res) => {
  Answer.findByIdAndUpdate(req.params.id,
      {
        text: req.body.text,
      }
    )
      .then(answer => res.json(answer))
      .catch(err =>
          res.status(404).json({ noanswerfound: 'No answer found with that ID' })
      );
});


// create new answer
router.post('/',
    passport.authenticate('jwt', { session: false }), (req, res) => {
      const { errors, isValid } = validateAnswerInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newAnswer = new Answer({
        text: req.body.text,
        user: req.user.id,
        question: req.question.id
      });
  
      newAnswer.save().then(answer => res.json(answer));
    }
  );

  module.exports = router