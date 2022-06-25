const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hike extends Model {}

Hike.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        hikeName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hikeLength: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        elevationChange: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id:{
            type:DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps:false,
        underscored: true,
        modelName: 'hike'
    }

);

module.exports = Hike;