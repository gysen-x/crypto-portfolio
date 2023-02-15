const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const renderComponent = require('../lib/renderTemplate');
const SignIn = require('../views/SignIn');
const SignUp = require('../views/SignUp');
const { User } = require('../../db/models');

router.get('/signin', (req, res) => {
  try {
    renderComponent(SignIn, { username: req.session?.user?.name }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/signin', async (req, res) => {
  const { name, password } = req.body;
  // console.log('name, password: ', name, password);

  try {
    const userFromDatabase = await User.findOne({ where: { name }, raw: true });
    // if (!userFromDatabase) return res.status(401).json({ err });

    const isSamePassword = await bcrypt.compare(password, userFromDatabase.password);
    if (!isSamePassword) {
      res.send({ message: 'Error' });
    }
    req.session.user = { id: userFromDatabase.id, name: userFromDatabase.name };
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/signup', (req, res) => {
  try {
    renderComponent(SignUp, { username: req.session?.user?.name }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/signup', async (req, res) => {
  const { username, useremail, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name: username, email: useremail, password: hashPassword });
    res.send({ userId: user.id, username: user.name });
  } catch (error) {
    console.log(error);
  }
});

router.get('/signout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').redirect('/');
});

module.exports = router;
