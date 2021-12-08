const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

  // yes no score
  //

})

module.exports = Question = mongoose.model('Question', QuestionSchema)