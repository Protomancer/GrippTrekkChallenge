const router = require('express').Router();
const apiRoutes = require('./api');
const hbsRoutes = require('./homeRoutes')

router.use('/api', apiRoutes);
router.use('/', hbsRoutes);
module.exports = router;