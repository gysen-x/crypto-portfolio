const express = require('express');

const router = express.Router();

const Portfolio = require('../views/Portfolio');

const renderTemplate = require('../lib/renderTemplate');

const { Transactions } = require('../../db/models');

router.get('/', (req, res) => {
  try {
    renderTemplate(Portfolio, { username: req.session?.user?.name }, res);
  } catch (error) {
    console.log('error', error);
  }
});

router.post('/', async (req, res) => {
  const { coin, amount, price } = req.body;
  try {
    const transactionDataBase = await Transactions.create({ coin, amount, price });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
