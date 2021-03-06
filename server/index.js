const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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

app.post('/createtodo', (req, res) => {
  console.log(req.body);
  db.task
    .create({
      title: req.body.title,
      description: req.body.description,
      userId: 1,
      completed: false,
    })
    .then(response => res.send(response));
});

app.patch('/changestatus', (req, res) => {
  const { id, status } = req.body;
  console.log(`${id}, ${status}`);
  res.send(`${id}, ${status}`);
});

app.delete('/removetodo/:id', (req, res) => {
  console.log(`trying to destroy ${req.params}`);

  db.task
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(response => res.send('successfully deleted'));
});

app.put('/edittodo', (req, res) => {
  const { id, title, description } = req.body;
  db.task
    .findOne({
      where: { id: id },
    })
    .then(todo => {
      if (todo) {
        todo
          .updateAttributes({ title, description })
          .then(() => res.send('success'));
      }
    });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
