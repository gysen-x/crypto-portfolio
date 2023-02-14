const express = require('express');

const router = express.Router();

const Portfolio = require('../views/Portfolio');

const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  try {
    renderTemplate(Portfolio, { username: req.session?.user?.name }, res);
  } catch (error) {
    console.log('error', error);
  }
});

module.exports = router;
