const router = require(`express`).Router();

// routes api - home -dashboard
const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes';)
const dashboardRoutes = require('./dashboardRoutes');

// call routes
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;