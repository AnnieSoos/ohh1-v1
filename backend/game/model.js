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
  board: {
    type: Sequelize.STRING
    allowNull: true
  }
  locked: {
    type: Sequelize.STRING
    allowNull: true
  }
  {
  tableName: 'Game',
  timestamps: false
})

module.exports = Game
