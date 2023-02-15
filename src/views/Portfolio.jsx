const React = require('react');
const Layout = require('./Layout');

module.exports = function Portfolio({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <h1 className=" header__item portfolio-title">Your Portfolio</h1>
        <div className="table-container flex">

          <div className="table flex">
            <table className="table_dark table_portfolio">
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>Holdings</th>
                <th>Avg. Price</th>
                <th>Profit/Loss</th>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img className="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC logo" />
                  </span>
                  <span className="coin-name">Bitcoin</span>
                  <span className="coin-short">BTC</span>
                </td>
                <td>$30000</td>
                <td>
                  <span className="holdings-dollar">$20000</span>
                  <span className="holdings-coins">0.7BTC</span>
                </td>
                <td>$30.000</td>
                <td>
                  <span className="profit-loss-dollar">$-343</span>
                  <span className="profit-loss-percent">-12%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img className="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC logo" />
                  </span>
                  <span className="coin-name">Bitcoin</span>
                  <span className="coin-short">BTC</span>
                </td>
                <td>$30000</td>
                <td>
                  <span className="holdings-dollar">$20000</span>
                  <span className="holdings-coins">0.7BTC</span>
                </td>
                <td>$30.000</td>
                <td>
                  <span className="profit-loss-dollar">$-343</span>
                  <span className="profit-loss-percent">-12%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img className="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC logo" />
                  </span>
                  <span className="coin-name">Bitcoin</span>
                  <span className="coin-short">BTC</span>
                </td>
                <td>$30000</td>
                <td>
                  <span className="holdings-dollar">$20000</span>
                  <span className="holdings-coins">0.7BTC</span>
                </td>
                <td>$30.000</td>
                <td>
                  <span className="profit-loss-dollar">$-343</span>
                  <span className="profit-loss-percent">-12%</span>
                </td>
              </tr>
            </table>
          </div>

          <div className="table-form-box">
            <form className="form flex" id="signinForm" method="POST" action="/portfolio">
              <h2 className="form__title">Enter amount</h2>
              <div className="form__group flex">
                <label className="form__label" htmlFor="coin">Coin</label>
                <select className="form__input" name="coin" id="coin">
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Etherium">Etherium</option>
                  <option value="Cardano">Cardano</option>
                  <option value="Cosmos">Cosmos</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Etherium">Etherium</option>
                  <option value="Cardano">Cardano</option>
                  <option value="Cosmos">Cosmos</option>
                </select>
              </div>
              <div className="form__group flex">
                <label className="form__label" htmlFor="amount">Amount</label>
                <input className="form__input" id="amount" name="amount" type="text" required />
              </div>
              <div className="form__group flex">
                <label className="form__label" htmlFor="price">Price</label>
                <input className="form__input" id="price" name="price" type="text" required />
              </div>
              <div className="form__group flex">
                <label className="form__label" htmlFor="date">Price</label>
                <input className="form__input" id="date" name="date" type="date" required />
              </div>

              <button className="form__button edit-form__button" type="submit">Add transaction</button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
};
