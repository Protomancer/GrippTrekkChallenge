const sequelize = require('../config/connection');
const Boulder = require('../models/Boulder');
const Hike = require('../models/Hike');
const User = require('../models/User');

const userData = require('./user-data.json');
const hikeData = require('./hiking-seeds.json');
const boulderData = require('./boulder-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const hike of hikeData) {
    await Hike.create({
      ...hike,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  for (const boulder of boulderData) {
    await Boulder.create({
      ...boulder,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  for (const user of userData) {
    await User.create({
      ...user,
      user_id: users[Math.floor(Math.random() * user.length)].id,
    });
  };

  process.exit(0);
};

seedDatabase();