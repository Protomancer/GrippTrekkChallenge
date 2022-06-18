const router = require('express').Router();
const hikeRoutes = require('./hikeRoutes');
const boulderRoutes = require('./boulderRoutes');
const userRoutes = require('./userRoutes');


router.use('/boulder', boulderRoutes);

router.use('/hike', hikeRoutes);

router.use('/user', userRoutes);

module.exports = router;