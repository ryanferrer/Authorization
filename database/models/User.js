// import DB connection
const mongoose = require('../mongoose.config.js');

const { Schema } = mongoose;

// Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Model to export
const User = mongoose.model('User', userSchema);

module.exports = User;