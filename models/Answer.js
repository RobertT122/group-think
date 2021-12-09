const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema ({
  user: {
    type: new Schema({id: Schema.Types.ObjectId, job: String}),
    required: true
  },
  question: {
    type: new Schema({id: Schema.Types.ObjectId, text: String}),
    required: true
    // only text and later category
  },
  input: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  },
  weight: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true

})

module.exports = Answer = mongoose.model('Answer', AnswerSchema)