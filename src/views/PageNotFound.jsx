const React = require('react');
const Layout = require('./Layout');

module.exports = function PageNotFound({ username }) {
  return (
    <Layout username={username}>
      <div>
        <div className="container container-404 flex">
          <h1 className="page-404">404</h1>
          <h2 className="page-not-found">Page not found</h2>
        </div>
      </div>
    </Layout>
  );
};
