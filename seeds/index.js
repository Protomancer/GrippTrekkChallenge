const sequelize = require('../config/connection');
const Boulder = require('../models/Boulder');
const Hike = require('../models/Hike');
const User = require('../models/User');
const hikeData = []
const boulderData = []
const userData = []

for (let i = 0; i < 10; i++) {
  hikeData.push({
    hikeName: `HikeName${i}`,
    time: `${Math.floor(Math.random() * 10)}`,
    length: 0,
    elevationChange: 0
  });
};
for (let i = 0; i < 10; i++) {
  boulderData.push({
    routeName: `BoulderName${i}`,
    rating: 'v0',
    attempts: `${Math.floor(Math.random() * 5)}`,
    notes: 0,
  });
};
for (let i = 0; i < 10; i++) {
  userData.push({
    id: `${Math.floor(Math.random() * 12)}`,
    name: `UserName${i}`,
    email: `rumblyinmytumbly@gmail.com`,
    password: 'password',
  });
};

async function seedDatabase() {


  await sequelize.sync({ force: true });

  await Boulder.bulkCreate(boulderData, {
    individualHooks: true,
    returning: true,
  });

  await Hike.bulkCreate(hikeData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
}

seedDatabase();