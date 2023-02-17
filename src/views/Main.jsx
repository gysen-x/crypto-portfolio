const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <div className="main-wrapper">
          <h1 className=" header__item">Top coins</h1>

          <div id="table-wrapper" className="table flex">
            <table id="table-top-coins" className="table_dark" />
          </div>
        </div>

      </div>
    </Layout>
  );
};
