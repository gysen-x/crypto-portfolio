const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUp() {
  return (
    <Layout>
      <form action="/auth/signup" method="POST">
        <label htmlFor="username">Login:</label>
        <input id="username" type="text" name="username" id="username" />
        <label htmlFor="useremail">Email:</label>
        <input id="useremail" type="email" name="useremail" id="useremail" />
        <label htmlFor="username">Password:</label>
        <input id="password" type="password" name="password" id="password" />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};
