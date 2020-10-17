

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    // The email cannot be null, and must be a proper email before creation
    event: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventStart: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    eventEnd: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    calName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Event.associate = function (models) {
    Event.belongsTo(models.Calendar, {
      constraints: false
    });
  };

  return Event;
};
