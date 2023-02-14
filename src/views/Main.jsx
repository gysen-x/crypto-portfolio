const React = require('react');
const Layout = require('./Layout');

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

module.exports = function Main({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <div className="main-wrapper flex">
          <div className=" header__item">Top coins</div>

          <div className="table flex">
            <table className="table_dark">
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>Volume</th>
                <th>24H</th>
                <th>Market Cap</th>
              </tr>
              <tr>
                <td>
                  <span className="coin-logo">
                    <img className="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC logo" />
                  </span>
                  <span className="coin-name"> Bitcoin</span>
                  <span className="coin-short">BTC</span>
                </td>
                <td>$30.000</td>
                <td>0.2</td>
                <td>2.5%</td>
                <td>10000000</td>
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
                  <span className="coin-name">Etherium</span>
                  <span className="coin-short">ETH</span>
                </td>
                <td>$2000</td>
                <td>10000</td>
                <td>2.5%</td>
                <td>10000000</td>
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
                <td>2300000</td>
                <td>2.5%</td>
                <td>10000000</td>
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
                <td>12343849</td>
                <td>2.5%</td>
                <td>10000000</td>
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
                <td>39849384</td>
                <td>2.5%</td>
                <td>10000000</td>
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
                <td>89348394</td>
                <td>2.5%</td>
                <td>10000000</td>
              </tr>
            </table>
          </div>
        </div>

      </div>
    </Layout>
  );
};
