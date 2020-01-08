const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const route = express.Router();

/*
  Pseudocode:

  input: user credentials
  output: json web token

*/

// import CRUD handler
const { findUser } = require('../../../database/controllers/User.js');

route.post('/', (req, res) => {
  console.log('incoming request for: ', req.body);

  bcrypt.hash(req.body.credentials.password, 10, (err, hash) => {
    if (err) {
      console.log('error hashing password', err);
    } else {
      const payload = {
        username: req.body.credentials.username,
        password: hash,
      };

      console.log('hashing the payload:', payload);

      findUser(payload, (error, data) => {
        if (error || data === null) {
          console.log('database returned with an error', error);
          res.status(400).send('No such user :/');
        } else {
          console.log('successful login attempt!!');
          res.status(200).send('Welcome to your imaginary dasboard ');
        }
      });
    }
  });
});

module.exports = route;