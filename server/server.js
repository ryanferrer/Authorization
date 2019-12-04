const express = require('express');

const app = express();
const PORT = 3030;

// import route handlers
const user = require('./routes/api/User.js');

app.use(express.static('dist'));

// routes
app.use('/user', user);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});