require('@babel/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const mainRoute = require('./routes/mainRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const authRoute = require('./routes/authRoute');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/portfolio', portfolioRoute);

app.listen(PORT, () => { console.log(`server started on http://localhost:${PORT}`); });
