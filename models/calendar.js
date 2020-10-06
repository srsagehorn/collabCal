module.exports = function (sequelize, DataTypes) {
    var Calendar = sequelize.define("Calendar", {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      phone: {
        type: DataTypes.TEXT,
      },
      website: {
        type: DataTypes.TEXT,
      },
      tried: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  
    Calendar.associate = function (models) {
      Calendar.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
    return Calendar;
  };