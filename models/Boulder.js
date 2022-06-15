const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Boulder
class Boulder extends Model {}

Boulder.init(
  // Define fields/columns on model
  {
    routeName: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING
    },
    attempts: {
      type: DataTypes.INTEGER
    },
    notes: {
      type: DataTypes.STRING
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

module.exports = Book;