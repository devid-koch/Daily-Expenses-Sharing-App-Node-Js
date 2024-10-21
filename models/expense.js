const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');
const User = require('./user');

const Expense = sequelize.define('Expense', {
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  split_details: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

Expense.belongsTo(User, { foreignKey: 'userId' });

module.exports = Expense;
