const Hike = require('./Hike');

const Boulder = require('./Boulder');

const User = require('./User');


User.hasMany(Hike,Boulder, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Boulder.belongsTo(User, {
    foreignKey: 'user_id'
});
Hike.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User,Boulder,Hike};