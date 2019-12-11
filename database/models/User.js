// import DB connection
const mongoose = require('../mongoose.config.js');

const { Schema } = mongoose;

// Sub documents

const credentialsSchema = new Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, require: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const profileSchema = new Schema({
  fluentInEnglish: { type: Boolean },
  eligibleToWorkInUS: { type: Boolean },
  linkedInURL: { type: String },
  githubURL: { type: String },
  personalURL: { type: String },
});

// User Schema
const userSchema = new Schema({
  credentials: { type: credentialsSchema, required: true },
  profile: { type: profileSchema, required: true },
});


// Model to export
const User = mongoose.model('User', userSchema);

module.exports = User;