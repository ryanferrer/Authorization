const User = require('../models/User.js');
/*
  CRUD handlers

  Create -> .save()
  Read   -> .find() -> should list all
         -> .findOne() -> should find just one user
  Update -> .findOneAndUpdate()
  Delete -> .deleteOne()
*/

// Add a new user to the database
function addUser(payload, callback) {
  // create new user to insert
  const user = new User(payload);

  user.save((err, data) => {
    if (err) {
      console.log('could not add user.');
      callback(err);
    } else {
      console.log('adding user..');
      callback(null, data);
      console.log('success!');
    }
  });
}

// Retrieve and list all users from database (we may actually not want to use this, but it's there)
function listUsers(callback) {
  User.find({}, (err, data) => {
    if (err) {
      console.log('could not list users.');
      callback(err);
    } else {
      console.log('retrieving list of users..');
      callback(null, data);
      console.log('success!');
    }
  });
}

// Change a User's password
function updateUserPassword(payload, callback) {
  const query = {
    username: payload.username,
  };

  User.updateOne(query, {
    password: payload.password,
  }, (err, data) => {
    if (err) {
      console.log('could not find user to update.');
      callback(err);
    } else {
      console.log('updating user password..');
      callback(null, data);
      console.log('success!');
    }
  });
}

// Remove account
function deleteUser(payload, callback) {
  const query = {
    username: payload.username,
  };

  User.deleteOne(query, (err, data) => {
    if (err) {
      console.log('could not find user to delete.');
      callback(err);
    } else {
      console.log('deleting user..');
      callback(null, data);
      console.log('success!');
    }
  });
}

// Find User
function findUser(payload, callback) {
  User.findOne(payload, (err, data) => {
    if (err || data === null) {
      console.log('could not find user');
      callback(err, data);
    } else {
      console.log('user found! Logging in..', data);
      callback(null, data);
    }
  });
}

function authenticate(credentials, callback) {
  const query = credentials.username;

  User.find({ 'credentials.username': query }, 'credentials.password', (err, data) => {
    if (err) {
      console.log('could not find and authenticate user');
      callback(err);
    } else {
      console.log('here is the password for the user', query, data);
      callback(null, data);
    }
  });
}

module.exports = {
  authenticate,
  addUser,
  listUsers,
  findUser,
  updateUserPassword,
  deleteUser,
};