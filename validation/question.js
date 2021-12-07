const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateQuestionInput(data) {
  let errors = {};
  

  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
    errors.text = 'Questions must be at least 5 or less than 140 characters long';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Please enter a question';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};