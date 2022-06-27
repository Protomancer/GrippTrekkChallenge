const Hike = require('./Hike');
const User = require('./User');

Hike.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Hike, {
    // as: 'hikes',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Hike.associate({User});
User.associate({Hike});

module.exports = {User, Hike};