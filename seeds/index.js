const sequelize = require('../config/connection');
const Boulder = require('../models/Boulder');
const Hike = require('../models/Hike')
const boulderData = require('../seeds/boulder-seeds.json');
// const hikeData = require('../seeds/hiking-seeds.json')
// const faker = require("faker")
const hikeData = []

for (let i = 0; i < 10; i++) {
  hikeData.push({
    hikeName: `HikeName${i}`,
    time: `${Math.floor(Math.random() * 10)}`,
    length: 0,
    elevationChange: 0
  });
}
for (let i = 0; i < 10; i++) {
  boulderData.push({
    routeName: `BoulderName${i}`,
    rating: v0,
    attempts: `${math.floor(math.random() * 5)}`,
    notes: 0,

  });
}

const seedDatabase = async () => {


  await sequelize.sync({ force: true });

  await Boulder.bulkCreate(boulderData, {
    individualHooks: true,
    returning: true,
  });

  await Hike.bulkCreate(hikeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();