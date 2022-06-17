const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// Create a new Sequelize model for Boulder
class Boulder extends Model {}

Boulder.init(
  // Define fields/columns on model
  {
    routeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      alowNull: false
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },    
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'boulder'
  }
);

module.exports = Boulder;