const router = require('express').Router();


// user routes
const userRoutes = require('./userRoutes');

// post
const postRoutes = require('./postRoutes');
// comment
const commentRoutes = require('./commentRoutes');

//call routes
router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);





module.exports = router;
