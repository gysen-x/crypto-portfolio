const express = require('express');

const router = express.Router();

const Main = require('../views/Main');

const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  const title = 'Hello Elbrus';
  try {
    renderTemplate(Main, { title }, res);
  } catch (error) {
    console.log('error', error);
  }
});

module.exports = router;
