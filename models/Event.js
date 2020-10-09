

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    // The email cannot be null, and must be a proper email before creation
    event: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Event.associate = function (models) {
    Event.belongsTo(models.Calendar, {
    });
  };

  return Event;
};
