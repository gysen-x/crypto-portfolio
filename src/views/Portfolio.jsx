const React = require('react');
const Layout = require('./Layout');

module.exports = function Portfolio({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <div className="portfolio-table-wrapper">
          <h1 className=" header__item portfolio-title">Your Portfolio</h1>
          <div className="table-container flex">

            <div className="table flex">
              <table id="table_portfolio" className="table_dark table_portfolio" />
            </div>

            <div className="table-form-box">
              <form className="form flex" id="portfolio-form" name="portfolioform" method="POST" action="/portfolio">
                <h2 className="form__title">Enter amount</h2>
                <div className="form__group flex">
                  <label className="form__label" htmlFor="coin">Coin</label>
                  <select className="form__input" name="coin" id="coin" data-coin="coin" />
                </div>
                <div className="form__group flex">
                  <label className="form__label" htmlFor="amount">Amount</label>
                  <input className="form__input" id="amount" data-coin="amount" name="amount" type="text" required />
                </div>
                <div className="form__group flex">
                  <label className="form__label" htmlFor="price">Price</label>
                  <input className="form__input" id="price" data-coin="price" name="price" type="text" required />
                </div>
                <div className="form__group flex">
                  <label className="form__label" htmlFor="date">Date</label>
                  <input className="form__input" id="date" data-coin="date" name="date" type="date" required />
                </div>

                <button className="form__button edit-form__button" id="portfolio-button" type="submit">Add transaction</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};
