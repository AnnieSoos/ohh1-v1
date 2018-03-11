const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('Users', {
  gameId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  }
  {
  tableName: 'Game',
  timestamps: false
})

module.exports = Game
