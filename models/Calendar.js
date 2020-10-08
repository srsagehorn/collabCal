

module.exports = function (sequelize, DataTypes) {
  var Calendar = sequelize.define("Calendar", {
    // The email cannot be null, and must be a proper email before creation
    event: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING
    }
  });

  Calendar.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Calendar.belongsTo(models.CalendarType, {
    });
  };

  return Calendar;
};
