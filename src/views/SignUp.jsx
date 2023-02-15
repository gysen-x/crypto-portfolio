const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUp({ username }) {
  return (
    <Layout username={username}>
      <div className="container">
        <div className="sign-wrapper">
          <h2 className="form__title">Sign Up</h2>
          <form className="form flex" action="/auth/signup" method="POST">
            <div className="form__group flex">
              <label className="form__label" htmlFor="username">Username</label>
              <input className="form__input" id="username" type="text" name="username" />
            </div>
            <div className="form__group flex">
              <label className="form__label" htmlFor="useremail">Email</label>
              <input className="form__input" id="useremail" type="email" name="useremail" />
            </div>
            <div className="form__group flex">
              <label className="form__label" htmlFor="password">Password</label>
              <input className="form__input" id="password" type="password" name="password" />
            </div>
            <button className="form__button edit-form__button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
