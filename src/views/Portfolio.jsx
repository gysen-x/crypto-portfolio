const React = require('react');
const Layout = require('./Layout');

module.exports = function Portfolio({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className=" header__item">Your Portfolio</div>

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
          <div className="form-container">
            <form className="edit-form flex" action="/change-table" method="post">
              <select className="edit-form__select" name="edit-form" id="">
                <option value="Bitcoin">Bitcoin</option>
                <option value="Etherium">Etherium</option>
                <option value="Cardano">Cardano</option>
                <option value="Cosmos">Cosmos</option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Etherium">Etherium</option>
                <option value="Cardano">Cardano</option>
                <option value="Cosmos">Cosmos</option>

              </select>
              <input className="edit-form__input" type="number" min="0" />
              <button className="edit-form__button" type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
