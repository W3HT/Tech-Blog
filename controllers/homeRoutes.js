const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');


// get all '/'
router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => Post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('home', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get single '/post/:id/
router.get('/viewPost/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
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
      console.log(err)
      res.status(500).json(err);
    }
  });

// login '/login'
router.get('/login', (req, res)=> {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // signup '/signup'
    res.render('login')
})

router.get('/newPost', (req, res)=> {
  if (!req.session.logged_in) {
      res.redirect('/login');
      return;
  }
  // signup '/signup'
  res.render('newPost')
})

module.exports = router;