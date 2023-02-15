const tableTopCoins = document.querySelector('#table-top-coins');

document.addEventListener('DOMContentLoaded', async (event) => {
  const getData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
      );
      // res.json().then(console.log);
      const coinData = await res.json();
      console.log('coinData: ', coinData);
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
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  getData();
});
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
