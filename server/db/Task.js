const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');

const Task = sequelize.define('task', {
  // id: {
  //   type: Sequelize.UUID,
  //   primaryKey: true,
  // },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  completed: {
    type: Sequelize.BOOLEAN,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
});
User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;
