const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'questions'
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

  // score determination based on time
  // call outside function of time as multiplier

}, {
  timestamps: true

})

module.exports = Answer = mongoose.model('Answer', AnswerSchema)