const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
