const express = require('express');

const app = express();
const PORT = 3030;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});