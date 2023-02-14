const React = require('react');
const Layout = require('./Layout');

module.exports = function Portfolio({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <h1 className=" header__item">Your Portfolio</h1>
        <div className="table-container flex">

          <div className="table flex">
            <table className="table_dark">
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>Holdings</th>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img className="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC logo" />
                  </span>
                  <span className="coin-name">
                    Bitcoin
                  </span>
                  <span className="coin-short">
                    BTC
                  </span>
                </td>
                <td>$30.000</td>
                <td>0.2</td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img
                      className="coin-logo"
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                      loading="lazy"
                      alt="ETH logo"
                    />
                  </span>
                  <span className="coin-name">
                    Etherium
                  </span>
                  <span className="coin-short">
                    ETH
                  </span>
                </td>
                <td>$2000</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img
                      className="coin-logo"
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                      loading="lazy"
                      alt="SOL logo"
                    />
                  </span>
                  <span className="coin-name">
                    Solana
                  </span>
                  <span className="coin-short">
                    SOL
                  </span>
                </td>
                <td>$100</td>
                <td>14.3</td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img
                      className="coin-logo"
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/14803.png"
                      alt="AURORA logo"
                    />
                  </span>
                  <span className="coin-name">
                    Aurora
                  </span>
                  <span className="coin-short">
                    AURORA
                  </span>
                </td>
                <td>$1.2</td>
                <td>160</td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img
                      className="coin-logo"
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
                      loading="lazy"
                      alt="ADA logo"
                    />
                  </span>
                  <span className="coin-name">Cardano</span>
                  <span className="coin-short">ADA</span>
                </td>
                <td>$51</td>
                <td>21</td>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img
                      className="coin-logo"
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
                      alt="WNEAR logo"
                    />
                  </span>
                  <span className="coin-name">
                    Near Protocol
                  </span>
                  <span className="coin-short">
                    NEAR
                  </span>
                </td>
                <td>$1.4</td>
                <td>220</td>
              </tr>
            </table>
          </div>

          <div className="table-form-box">
            <form className="form flex" id="signinForm">
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

              <button className="form__button edit-form__button" type="submit">Add transaction</button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
};
