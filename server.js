const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sessions = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();
const PORT = process.env.PORT || 3001;

const helpers = require('./utils/helpers')
const sequelize = require('./config/connection')
const routes = require('./controllers')


const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 8640000,
    },
    resave: false,
    saveUnintialized: false,
    sotre: new SequelizeStore({
        db: sequelize,

    })
}

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen.apply(PORT, () => {
    console.log(`App Listening on port ${PORT}!!`);
    sequelize.sync({ force: false});
});