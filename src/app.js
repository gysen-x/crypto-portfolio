require('@babel/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dbConnect = require('../db/dbconnect');

// import routes
const mainRoute = require('./routes/mainRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const authRoute = require('./routes/authRoute');

const PORT = process.env.PORT ?? 3000;

const app = express(); // create server
dbConnect(); // check database connection

// create config for sessions
const sessionConfig = {
  name: 'sid',
  store: new FileStore({}),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(session(sessionConfig)); // run express session with our config

// console current user
app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  next();
});

// add middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// connect routes
app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/portfolio', portfolioRoute);

// start server
app.listen(PORT, () => { console.log(`server started on http://localhost:${PORT}`); });
