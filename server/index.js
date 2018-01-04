const express = require('express');
const db = require('./db');
const app = express();
const Sequelize = require('sequelize');

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

app.get('/user/:name', (req, res) =>
  db.user
    .findOne({
      where: { name: req.params.name },
    })
    .then(user => {
      if (!user) {
        res.send(`User ${req.params.name} not found`);
      } else if (user.role === 'manager') {
        db.task
          .findAll({ include: [{ model: db.user }] })
          .then(tasks => res.send({ user: user, tasks: tasks }));
      } else if (user.role === 'employee') {
        db.task.findAll({ where: { userId: user.id } }).then(tasks =>
          res.send({
            user: user,
            tasks: tasks,
          }),
        );
      }
    }),
);

app.listen(3000, () => console.log('app listening on port 3000'));
