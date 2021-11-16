const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');



// '/'
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,

            },
        })
    
        const posts = postData.map((post) => post.get({ plain: true}));
        console.log(posts)
        res.render('dashboard', {posts, logged_in: req.session.logged_in});
        
    }  catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
});


// '/new'
router.get('/new', withAuth, (req, res) => {
    res.render('newPost', {logged_in: req.session.logged_in})
})

// '/edit/:id'
router.get('/viewPost/:id', withAuth, (req, res) => {
    try {
        const postData =  Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true});

        res.render('viewPost', {logged_in: req.session.logged_in});
        }
    } catch (err) {
        res.redirect('login');
    }})

router.get('/viewPost/:id', async (req,res) =>{
    const postData = Post.findByPk(req.params.id, {
        include:[
            User,
            {
                model: Comment,
                include: [User]
            }
        ]
    })
    const comments = postData.comments.map(postComment => {
        const cleanUser = postComment.user.get({plain: true});
        let comment = postComment.get({plain: true});

        comment.user = cleanUser
        return comment
    });
    let post = postData.get({plain: req.session.logged_in});
    post.comments = comments 
    res.render('vewPost', {logged_in: req.session.logged_in});
 });

//

module.exports = router;