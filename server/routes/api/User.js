const express = require('express');

const router = express.Router();

// import controller methods here from database


// route handlers
router.get('/', (req, res) => {
  console.log('/user GET HIT!');

  res.send('I am the API for getting USERS!');
});

router.post('/', (req, res) => {
  console.log('/user POST HIT!');

  res.send('Successfully posted');
});

module.exports = router;