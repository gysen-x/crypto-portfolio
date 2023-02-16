const tableTopCoins = document.querySelector('#table-top-coins');
const tablePortfolio = document.querySelector('#table_portfolio');
const coinSelect = document.querySelector('#coin');

document.addEventListener('DOMContentLoaded', async (event) => {
  const getData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
      );
      const coinData = await res.json();

      if (tablePortfolio) {
        const response = await fetch('/portfolio/transactions');
        const transactionsData = await response.json();
        const serverData = transactionsData.result;
        console.log('coinData: ', coinData);

        serverData.forEach((elemFinal) => {
          const data = coinData.find((el) => elemFinal.name === el.name);
          if (data) {
            elemFinal.currentPrice = data.current_price;
            elemFinal.priceChange = data.price_change_24h;
            elemFinal.holdingsDollars = data.current_price * elemFinal.transactionAmount;
            elemFinal.averagePrice = elemFinal.transactionTotal / elemFinal.transactionAmount,
            elemFinal.pnlDollars = (elemFinal.transactionAmount * data.current_price) - elemFinal.transactionTotal;
            elemFinal.pnlPercent = 100 / ((data.current_price * elemFinal.transactionAmount) / ((elemFinal.transactionAmount * data.current_price) - elemFinal.transactionTotal));
            elemFinal.image = data.image;
            elemFinal.symbol = data.symbol;
          }
        });
        console.log('serverData: ', serverData);

        tablePortfolio.innerHTML = `
              <tr>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>Hold $</th>
                  <th>Coins</th>
                  <th>Avg.Price</th>
                  <th>PNL $</th>
                  <th>PNL %</th>
              </tr>
              ${serverData.map((coin) => (
    `
              <tr>
                  <td>
                    <span class="coin-logo">
                      <img class="coin-logo" src="${coin.image}"  alt="${coin.symbol} logo" />
                    </span>
                    <span class="coin-name">${coin.name}</span>
                    <span class="coin-short">${coin.symbol}</span>
                  </td>
                  <td>${coin.currentPrice.toFixed(2).toLocaleString()}</td>
                  <td>$ ${coin.transactionTotal.toLocaleString()}</td>
                  <td>${coin.transactionAmount}</td>
                  <td>$ ${coin.averagePrice.toFixed(2).toLocaleString()}</td>
                  <td>${coin.pnlDollars.toFixed(2).toLocaleString()}</td>
                  <td class="${coin.pnlPercent >= 0 ? 'green' : 'red'}">${coin.pnlPercent.toFixed(2)} %</td>
                </tr>
                `
  ))}
              `;

        coinSelect.innerHTML = `
              ${coinData.map((coin) => (
    `
                <option value="${coin.name}">${coin.name}</option>
                `
  ))
}
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
        <span class="coin-name">${coin.name}</span>
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

      //= ===================================
      const portfolioForm = document.forms.portfolioform;
      portfolioForm?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const coin = portfolioForm[0].value;
        const amount = portfolioForm[1].value;
        const price = portfolioForm[2].value;
        const date = portfolioForm[3].value;
        const data = {
          coin, amount, price, date,
        };
        const response = await fetch('/portfolio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.message === 'Ok!') {
          const response = await fetch('/portfolio/transactions');
          const transactionsData = await response.json();
          const serverData = transactionsData.result;
          console.log('coinData: ', coinData);

          serverData.forEach((elemFinal) => {
            const data = coinData.find((el) => elemFinal.name === el.name);
            if (data) {
              elemFinal.currentPrice = data.current_price;
              elemFinal.priceChange = data.price_change_24h;
              elemFinal.holdingsDollars = data.current_price * elemFinal.transactionAmount;
              elemFinal.averagePrice = elemFinal.transactionTotal / elemFinal.transactionAmount,
              elemFinal.pnlDollars = (elemFinal.transactionAmount * data.current_price) - elemFinal.transactionTotal;
              elemFinal.pnlPercent = 100 / ((data.current_price * elemFinal.transactionAmount) / ((elemFinal.transactionAmount * data.current_price) - elemFinal.transactionTotal));
              elemFinal.image = data.image;
              elemFinal.symbol = data.symbol;
            }
          });
          tablePortfolio.innerHTML = `
              <tr>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>Hold $</th>
                  <th>Coins</th>
                  <th>Avg.Price</th>
                  <th>PNL $</th>
                  <th>PNL %</th>
              </tr>
              ${serverData.map((coin) => (
    `
              <tr>
                  <td>
                    <span class="coin-logo">
                      <img class="coin-logo" src="${coin.image}"  alt="${coin.symbol} logo" />
                    </span>
                    <span class="coin-name">${coin.name}</span>
                    <span class="coin-short">${coin.symbol}</span>
                  </td>
                  <td>${coin.currentPrice.toFixed(2).toLocaleString()}</td>
                  <td>$ ${coin.transactionTotal.toLocaleString()}</td>
                  <td>${coin.transactionAmount}</td>
                  <td>$ ${coin.averagePrice.toFixed(2).toLocaleString()}</td>
                  <td>${coin.pnlDollars.toFixed(2).toLocaleString()}</td>
                  <td class="${coin.pnlPercent >= 0 ? 'green' : 'red'}">${coin.pnlPercent.toFixed(2)} %</td>
                </tr>
                `
  ))}
              `;
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  getData();
});
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
