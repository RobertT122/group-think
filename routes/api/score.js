const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const db = require("../../config/keys").mongoURI;

const Question = require('../../models/Question');
const Answer = require('../../models/Answer');
const User = require('../../models/User');

router.get('/score', (req, res) => {
  console.log("test")

  let allAnswers
  
  Answer.find({user: req.user})
    .then( answers => {
      allAnswers = answers
      let answersQuestions = answers.map( answer => answer.question._id)
      Question.find({_id: {$in: answersQuestions}, active: false})
        .then( questions => {
          let questionIds = questions.map(question => question._id)
          readyAnswers = allAnswers.filter( answer => answer.includes(answer.question._id))
        })
    })


})