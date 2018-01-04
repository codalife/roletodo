const sequelize = require('./sequelize');
const User = require('./User');
const Task = require('./Task');

module.exports = {
  user: User,
  task: Task,
};
