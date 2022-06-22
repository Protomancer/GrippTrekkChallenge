const router = require('express').Router();
const apiRoutes = require('./api');
<<<<<<< HEAD
const hbsRoutes = require('./homeRoutes');
=======
const hbsRoutes = require('./homeroutes')
>>>>>>> 5304b02a2d25b66dac3e444b0f5e80551d5e718d

router.use('/', hbsRoutes);
router.use('/api', apiRoutes);


module.exports = router;