const router = require(`express`).Router();

// routes api - home -dashboard
const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

// call routes

router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;