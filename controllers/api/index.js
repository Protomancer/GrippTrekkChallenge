const router = require('express').Router();
const userRoutes = require('./userRoutes');
const hikeRoutes = require('./hikeRoutes');

router.use('/users', userRoutes);
router.use('/hikes', hikeRoutes);



module.exports = router;