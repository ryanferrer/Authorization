const express = require('express');

const route = express.Router();

// import CRUD handler
const { findUser } = require('../../../database/controllers/User.js');

route.post('/', (req, res) => {
  /*
    Pseudocode:

    1) Send login POST request to this route
    2) req.body should contain:
      - username / email
      - password
    3) store contents of req.body into object variable
      - sanitize object??
    4) perform login query
      - On success, send user to their Dashboard
      - On failure, redirect user to login screen
  */
  console.log('incoming request for: ', req.body);

  const payload = {
    username: req.body.user.username,
    password: req.body.user.password,
  };

  findUser(payload, (err, data) => {
    if (err || data === null) {
      console.log('database returned with an error');
      res.status(400).send('No such user :/');
    } else {
      console.log('successful login attempt!!');
      res.status(200).send('Welcome to your imaginary dasboard ');
    }
  });
});

module.exports = route;