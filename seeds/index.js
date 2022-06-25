const sequelize = require('../config/connection');
const Hike = require('../models/Hike');
const User = require('../models/User');

const userData = require('./user-data.json');
const hikeData = require('./hiking-seeds.json');

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
  }
  process.exit(0);
};

seedDatabase();