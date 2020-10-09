
module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      // The email cannot be null, and must be a proper email before creation
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Comment.associate = function (models) {
      Comment.belongsTo(models.Event, {
      });
    };

    Comment.associate = function(models) {
      Calendar.hasMany(models.Calendar, {
      });
    };
  
    return Comment;
  };
  