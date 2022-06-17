const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connections');

class Hike extends Model {}

Hike.init (
    {
        hikeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        elevationChange: {
            type: DataTypes.STRING,
            allowNull: false
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