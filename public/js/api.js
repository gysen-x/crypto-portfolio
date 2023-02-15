const tableTopCoins = document.querySelector('#table-top-coins');
const tablePortfolio = document.querySelector('#table_portfolio');

document.addEventListener('DOMContentLoaded', async (event) => {
  const getData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
      );
      // res.json().then(console.log);
      const coinData = await res.json();
      // console.log('coinData: ', coinData);

      if (tablePortfolio) {
        const response = await fetch('/portfolio/transactions');
        const transactionsData = await response.json();
        console.log('transactionsData: ', transactionsData);

        tablePortfolio.innerHTML = `
        <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>Holdings</th>
                <th>Avg. Price</th>
                <th>Profit/Loss</th>
              </tr>
              ${transactionsData.map((coin) => (`
                <tr>
                  <td>
                    <span class="coin-logo">
                      <img class="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC logo" />
                    </span>
                    <span class="coin-name">Bitcoin</span>
                    <span class="coin-short">BTC</span>
                  </td>
                  <td>$30000</td>
                  <td>
                    <span class="holdings-dollar">$20000</span>
                    <span class="holdings-coins">0.7BTC</span>
                  </td>
                  <td>$30.000</td>
                  <td>
                    <span class="profit-loss-dollar">$-343</span>
                    <span class="profit-loss-percent">-12%</span>
                  </td>
                </tr>
                `
  ))}
        `;
      }

      if (tableTopCoins) {
        tableTopCoins.innerHTML = `
      <tr>
      <th>Coin</th>
      <th>Price</th>
      <th>Volume</th>
      <th>24H</th>
      <th>Market Cap</th>
    </tr>
    ${coinData.map((coin) => (
    `<tr>
      <td>
        <span class="coin-logo">
          <img class="coin-logo" src="${coin.image}" alt="${coin.symbol} logo" />
        </span>
        <span class="coin-name"> ${coin.name}</span>
        <span class="coin-short">${coin.symbol}</span>
      </td>
      <td>$${coin.current_price.toFixed(2)}</td>
      <td>$${coin.total_volume.toLocaleString()}</td>
      <td class="${coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}">${coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td>$${coin.market_cap.toLocaleString()}</td>
    </tr>`
  ))}
      `;
      }
    } catch (error) {
      console.error(error);
    }
  };

  getData();
});
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
