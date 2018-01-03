const express = require('express');
const db = require('./db');
const app = express();

const hardCoded = [
  { name: 'Do good', completed: false },
  { name: 'Get a job', completed: false },
  { name: 'Make everyone happy', completed: false },
];

app.use(express.static('dist'));

app.get('/data', (req, res) => res.send(hardCoded));

app.listen(3000, () => console.log('app listening on port 3000'));
