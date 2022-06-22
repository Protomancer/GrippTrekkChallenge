const sequelize = require('../config/connection');
const Boulder = require('../models/Boulder');
const Hike = require('../models/Hike');
const User = require('../models/User');
// const hikeData = []
// const boulderData = []
// const userData = []

// for (let i = 0; i < 10; i++) {
//   hikeData.push({
//     hikeName: `HikeName${i}`,
//     time: `${Math.floor(Math.random() * 10)}`,
//     length: 0,
//     elevationChange: 0
//   });
// };
// for (let i = 0; i < 10; i++) {
//   boulderData.push({
//     routeName: `BoulderName${i}`,
//     rating: 'v0',
//     attempts: `${Math.floor(Math.random() * 5)}`,
//     notes: 0,
//   });
// };
// for (let i = 0; i < 1; i++) {
//   userData.push({
//     id: `1`,
//     name: `UserName${i}`,
//     email: `rumblyinmytumbly@gmail.com`,
//     password: 'password',
//   });
// };

// async function seedDatabase() {


//   await sequelize.sync({ force: true });

//   await Boulder.bulkCreate(boulderData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await Hike.bulkCreate(hikeData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// }

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

  process.exit(0);
};

seedDatabase();