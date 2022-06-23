const router = require('express').Router();
const hikeRoutes = require('./hikeRoutes');
const userRoutes = require('./userRoutes');

router.use('/hikes', hikeRoutes);

router.use('/users', userRoutes);

module.exports = router;