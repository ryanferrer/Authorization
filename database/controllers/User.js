const User = require('../models/User.js');

/*
  CRUD handlers

  Create -> .save()
  Read   -> .find() -> should list all
         -> .findOne() -> should find just one user
  Update -> .findOneAndUpdate()
  Delete -> .deleteOne()
*/

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

module.exports = {
  addUser,
  listUsers,
  updateUserPassword,
  deleteUser,
};