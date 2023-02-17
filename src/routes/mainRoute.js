const express = require('express');

const router = express.Router();

const Main = require('../views/Main');

const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  try {
    renderTemplate(Main, { username: req.session?.user?.name }, res);
  } catch (error) {
    console.log('error', error);
  }
});

module.exports = router;
