const sequelize = require('../config/connection');
const { User, Post, Comment } = requrire('../models');

const userData = require('.userData.json');
const postData = require('.postData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        indivualHooks: true,
        returning: true,
    })

    for (const post of postData) {
        await. Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            post_id: 1,
        })
    }
    process.exit(0);
};

seedDatabase();