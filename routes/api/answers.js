const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Answer = require('../../models/Answer');
const Question = require('../../models/Question');


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
router.get('/question/:question_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  let id = mongoose.Types.ObjectId(req.params.question_id)
  Question.findById(id).then(question =>
    Answer.find({question})

        .sort({ date: -1 })
        .then(answers => res.json(answers))
        .catch(err =>
            res.status(404).json({ noanswersfound: 'No answers found for that question' }
        )
    ));
});


router.post('/',
    passport.authenticate('jwt', { session: false }), (req, res) => {

      let id = mongoose.Types.ObjectId(req.body.question_id)
        Question.findById(id)
        .then(question => {
          const newAnswer = new Answer({
            input: req.body.input,
            user: req.user,
            question,
            weight: req.body.weight
          })
      
          newAnswer.save().then(answer => res.json(answer))
        })
    }
  );


  module.exports = router