const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hike extends Model {}

Hike.init (
    {
        hikeName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        elevationChange: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps:false,
        underscored: true,
        modelName: 'hike'
    }

);

module.exports = Hike;