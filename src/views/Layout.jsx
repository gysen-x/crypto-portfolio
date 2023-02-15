const React = require('react');
const Sidebar = require('./Sidebar');

module.exports = function Layout({ children, username }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/client.js" />
        <script defer src="/js/api.js" />
      </head>
      <body>
        <Sidebar username={username} />
        {children}
      </body>
    </html>
  );
};
