const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const hardCoded = {
  Anuar: {
    role: 'employee',
    tasks: [
      { name: 'Do good', completed: false },
      { name: 'Get a job', completed: false },
      { name: 'Make everyone happy', completed: false },
    ],
  },
  Rane: {
    role: 'manager',
    tasks: [
      { name: 'Hire Anuar', completed: false },
      { name: 'Get a job', completed: false },
      { name: 'Make everyone happy', completed: false },
    ],
  },
};

app.use(express.static('dist'));

app.get('/data', (req, res) => res.send(hardCoded));
app.get('/user/:name', (req, res) => res.send(hardCoded[req.params.name]));

app.listen(3000, () => console.log('app listening on port 3000'));
