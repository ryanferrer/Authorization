const express = require('express');

const router = express.Router();

// import controller methods here from database
const {
  addUser,
  listUsers,
} = require('../../../database/controllers/User.js');

// route handlers


router.get('/', (req, res) => {
  console.log('/user GET HIT!');

  listUsers((err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send('could not get users');
    } else {
      console.log('sending users, ', data);
      res.status(200).send(data);
    }
  });
});


router.post('/', (req, res) => {
  console.log('/user POST HIT!');
  const payload = {
    username: req.body.username || null,
    password: req.body.password || null,
  };

  console.log(payload);

  addUser(payload, (err) => {
    if (err) {
      res.status(400).send('could not register user');
    } else {
      res.status(200).send('you are now registered!');
    }
  });
});
module.exports = router;