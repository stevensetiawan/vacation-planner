'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    destination: DataTypes.STRING,
    detail: DataTypes.TEXT,
    date: DataTypes.DATEONLY
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};