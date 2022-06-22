const router = require('express').Router();
const hikeRoutes = require('./hikeRoutes');
const boulderRoutes = require('./boulderRoutes');
const userRoutes = require('./userRoutes');


router.use('/boulders', boulderRoutes);

router.use('/hikes', hikeRoutes);

router.use('/users', userRoutes);

module.exports = router;