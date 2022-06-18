const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Boulder
class Boulder extends Model {}

Boulder.init(
  {
    routeName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.STRING,
      alowNull: true
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },    
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'boulder'
  }
);

module.exports = Boulder;