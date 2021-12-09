const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
  user: {
    type: new Schema({id: Schema.Types.ObjectId, username: String}),
    required: true
    // type: Schema.Types.ObjectId,
    // ref: 'User'
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
  },
  
  // later category

})

module.exports = Question = mongoose.model('Question', QuestionSchema)