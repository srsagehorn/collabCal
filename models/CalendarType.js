
module.exports = function(sequelize, DataTypes) {
    var CalendarType = sequelize.define("CalendarType", {
      // The email cannot be null, and must be a proper email before creation
      type: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
  
    CalendarType.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      CalendarType.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
      });
    };

    CalendarType.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        CalendarType.hasMany(models.Calendar, {
        });
      };


      return CalendarType;
};