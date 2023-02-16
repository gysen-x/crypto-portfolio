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
      user_id: req.session.user.id, coin_id: coinId.id, amount, price, spent: amount * price, date,
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
    const totalCoins = holdingsDB.map((elem) => elem?.Transactions?.reduce((acc, el) => acc + el.amount, 0));
    const totalPrice = holdingsDB.map((elem) => elem?.Transactions?.reduce((acc, el) => acc + el.price, 0));
    const totalSpent = holdingsDB.map((elem) => elem?.Transactions?.reduce((acc, el) => acc + el.spent, 0));
    const allCoinsArray = holdingsDB.map((coin, index) => coin = {
      name: coin.name,
      transactionAmount: totalCoins[index],
      transactionPrice: totalPrice[index],
      transactionTotal: totalSpent[index],
    });
    const result = allCoinsArray.filter((elem) => (elem.transactionAmount > 0));

    console.log('result: ', result);

    res.json({ result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// const transactionDataBase = await Transaction.create({
//   coin, amount, price, date,
// });

// x = a * b - ((c * 100) / a * b)
// x = a * b * (1 - c/100)
