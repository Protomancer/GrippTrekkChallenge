const router = require('express').Router();
const apiRoutes = require('./api');
const hbsRoutes = require('./homeRoutes');

router.use('/', hbsRoutes);
router.use('/api', apiRoutes);


module.exports = router;