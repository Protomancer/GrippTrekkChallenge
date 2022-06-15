const sequelize = require('../config/connection');
const Boulder = require('../models/Boulder');
const Hiking = requre('../models/Hike')
const boulderData = require('../seeds/boulder-seeds.json');
const hikeData = require('../seeds/hiking-seeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Boulder.bulkCreate(boulderData, {
    individualHooks: true,
    returning: true,
  });

  await Hiking.bulkCreate(hikeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();