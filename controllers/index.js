const router = require('express').Router();
const apiRoutes = require('./api');
const hbsRoutes = require('./homeroutes')

router.use('/', hbsRoutes);
router.use('/api', apiRoutes);


module.exports = router;