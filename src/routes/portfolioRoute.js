const express = require('express');

const router = express.Router();

const Portfolio = require('../views/Portfolio');

const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  const title = 'Hello Elbrus';
  try {
    renderTemplate(Portfolio, { title }, res);
  } catch (error) {
    console.log('error', error);
  }
});

module.exports = router;
