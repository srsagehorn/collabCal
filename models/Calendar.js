
module.exports = function(sequelize, DataTypes) {
    var Calendar = sequelize.define("Calendar", {
      type: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
  
    Calendar.associate = function(models) {
      Calendar.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
      });
    };

    Calendar.associate = function(models) {
        Calendar.hasMany(models.Event, {
        });
      };


      return Calendar;
};