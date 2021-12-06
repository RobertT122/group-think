const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


// create a user
router.post('/register', (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: "That email is already in use, do you already have an account?"})
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          job: req.body.job,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})


// login route for a user
router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'We cannot find a user with this email'});
      }

      bcrypt.compare(password, user.password)
  .then(isMatch => {
    if (isMatch) {
      const payload = {id: user.id, email: user.email, username: user.username};

      jwt.sign(
        payload,
        keys.secretOrKey,
        {expiresIn: 3600},
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
    } else {
      return res.status(400).json({password: 'Incorrect password'});
    }
  })
  })
})

// see current user
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

module.exports = router;