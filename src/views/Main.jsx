const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div>
        Hello Elbrus!
      </div>
    </Layout>
  );
};
