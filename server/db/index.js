const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('');

const users = [
  { name: 'Anuar', role: 'employee' },
  { name: 'Rane', role: 'manager' },
  { name: 'Soumya', role: 'employee' },
];

const tasks = [
  {
    description: 'Do somethning good today',
    title: 'Good Deed',
    user: 'Anuar',
  },
  { description: 'Create To Do App', title: 'Tech asessment', user: 'Anuar' },
  { description: 'Create awesome design', title: 'Good Deed', user: 'Soumya' },
  { description: 'Be IoT superstar', title: 'Good Deed', user: 'Anuar' },
];

db.serialize(function() {
  db.run(
    `CREATE TABLE user (userid INTEGER PRIMARY KEY, name TEXT, role TEXT)`,
  );
  db.run(
    `CREATE TABLE task (taskid INTEGER PRIMARY KEY, description TEXT, user_id INTEGER, FOREIGN KEY(user_id) REFERENCES user(userid))`,
  );

  var stmt = db.prepare('INSERT INTO user VALUES (?, ?, ?)');
  users.forEach((user, index) => stmt.run(index, user.name, user.role));
  stmt.finalize();

  var stmt1 = db.prepare('INSERT INTO task VALUES (?, ?, ?)');
  db.serialize(() => {
    for (var i = 0; i < tasks.length; i += 1) {
      (index =>
        db.serialize(() => {
          db.get(
            `SELECT userid, name FROM user WHERE name = (?)`,
            tasks[index].user,
            (err, row) => {
              if (err) console.log(err);
              stmt1.run(index, tasks[index].description, row.userid);
            },
          );
        }))(i);
    }
    setTimeout(() => {
      stmt1.finalize();
    }, 2000);
  });

  db.each('SELECT taskid, description, user_id FROM task', function(err, row) {
    if (err) console.log(err);
    console.log(`${row.taskid}. ${row.description}: ${row.user_id}`);
  });
});

// db.close();
