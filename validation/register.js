const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.username, {min: 2, max: 15})) {
    errors.handle = 'Username must be between 2 and 15 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'This email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Please confirm your password';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Both passwords must match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
