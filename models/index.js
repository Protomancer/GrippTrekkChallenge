const Hike = require('./Hike');

const Boulder = require('./Boulder');

const User = require('./User');


User.hasMany(Hike, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Hike.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = Hike;

module.exports = {Boulder};

module.exports = {User};