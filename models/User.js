const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: { 
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }

  // groupThink score
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);