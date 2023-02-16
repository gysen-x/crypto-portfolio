const React = require('react');
const Layout = require('./Layout');

module.exports = function SignIn({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <div className="sign-wrapper">
          <h2 className="form__title">Sign In</h2>
          <form className="form flex" id="signin-form" method="POST" action="/auth/signin">
            <div className="form__group flex">
              <label className="form__label" htmlFor="username">Username</label>
              <input className="form__input" id="username" name="name" type="text" required />
            </div>
            <div className="form__group flex">
              <label className="form__label" htmlFor="password">Password</label>
              <input className="form__input" id="password" name="password" type="password" required />
            </div>
            <div id="error" />
            <button className="form__button edit-form__button" id="signin-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
