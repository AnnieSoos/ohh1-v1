'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    board: DataTypes.STRING,
    locked: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
