const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const route = express.Router();

/*
  Pseudocode:

  input: user credentials
  output: json web token

*/

// import handler
const { authenticate } = require('../../../database/controllers/User.js');

route.post('/', (req, res) => {
  console.log('incoming request for: ', req.body);

  const payload = {
    username: req.body.credentials.username,
    password: req.body.credentials.password
  }

  authenticate(req.body, (error, data) => {
    if (error) {
      console.log('database returned with an error', error);
      res.status(400).send('Error: No Such User');
    } else {
      console.log('successful login attempt!!');
      // Issue a jwt token here
      res.status(200).send('Welcome to your dashboard!');
    }
  });
});
module.exports = route;