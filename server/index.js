const express = require('express');
const db = require('./db');
const app = express();
const Sequelize = require('sequelize');

const hardCoded = {
  Anuar: {
    role: 'employee',
    tasks: [
      { name: 'Do good', completed: false },
      { name: 'Get a job', completed: false },
      { name: 'Make everyone happy', completed: true },
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

app.get('/users', (req, res) =>
  db.user
    .findAll({
      include: [
        {
          model: db.task,
        },
      ],
    })
    .then(users => res.send(users))
    .catch(err => console.log(err)),
);

app.get('/user/:name', (req, res) => res.send(hardCoded[req.params.name]));

app.listen(3000, () => console.log('app listening on port 3000'));
