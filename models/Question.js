const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  body: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }

})

module.exports = Question = mongoose.model('Question', QuestionSchema)