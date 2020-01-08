const express = require('express');
const bcrypt = require('bcrypt');

const route = express.Router();

// import CRUD handler
const { findUser } = require('../../../database/controllers/User.js');

route.post('/', (req, res) => {
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