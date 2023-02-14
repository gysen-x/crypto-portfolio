/* Example in Node.js */
const axios = require('axios');

const getData = async () => {
  try {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    );
    const coinsArray = [];
    res.data.map((coin) => coinsArray.push(coin.name));
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

getData();
