const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');


// get all '/'
router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await post.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get single '/post/:id/
router.get('/post/:id', async (req, res) => {
    try {
      const singlePostData = await SinglePost.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('singlePost', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// login '/login'
router.get('login', (req, res)=> {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // signup '/signup'
    res.render('signup')
})



module.exports = router;