const express = require('express');

const router = express.Router();

const Portfolio = require('../views/Portfolio');

const renderTemplate = require('../lib/renderTemplate');

const { Coin, Transaction } = require('../../db/models');

router.get('/', (req, res) => {
  try {
    renderTemplate(Portfolio, { username: req.session?.user?.name }, res);
  } catch (error) {
    console.log('error', error);
  }
});

router.post('/', async (req, res) => {
  const {
    coin, amount, price, date,
  } = req.body;
  try {
    const coinId = await Coin.findOne({ where: { name: coin } });
    const transactionDataBase = await Transaction.create({
      user_id: req.session.user.id, coin_id: coinId.id, amount, price, date,
    });
    res.json({ transactionDataBase });
  } catch (error) {
    console.log(error);
  }
});

router.get('/transactions', async (req, res) => {
  try {
    const holdingsDB = await Coin.findAll({
      include: [{ model: Transaction }],
    });

    console.log('holdingsDB: ', holdingsDB[0]);
    const sum = holdingsDB.map((elem) => elem?.Transactions?.reduce((acc, el) => acc + el.amount, 0));
    console.log('sum: ', sum);

    res.json({ holdingsDB });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// const transactionDataBase = await Transaction.create({
//   coin, amount, price, date,
// });
