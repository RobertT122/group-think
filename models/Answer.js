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
}, {
  timestamps: true

})

module.exports = Answer = mongoose.model('Answer', AnswerSchema)