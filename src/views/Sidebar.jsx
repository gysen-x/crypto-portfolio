const React = require('react');

function Sidebar({ username }) {
  return (
    <div className="div">
      <div className="sidebar flex">
        <div className="sidebar__top-wrapper">
          <div className="sidebar__logo logo">
            <a href="/" className="logo__link">
              <img className="sidebar__img" src="/img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="sidebar__nav nav">
            <ul className="nav__list list-reset flex">
              <li className="nav__item"><a href="/" className="nav__item-link">Main page</a></li>
              {username ? (
                <li className="nav__item"><a href="/portfolio" className="nav__item-link">Portfolio</a></li>
              ) : (
                <li className="nav__item"><a href="/auth/signin" className="nav__item-link">Sign in to use portfolio</a></li>
              )}
            </ul>
          </div>
        </div>
        <div className="sidebar__bottom-wrapper">
          <div className="sidebar__bottom bottom">
            <ul className="bottom__list list-reset flex">
              <li className="bottom__item"><a href="/" className="bottom__link">Profile</a></li>
              <li className="bottom__item"><a href="/" className="bottom__link">About us</a></li>
              <li className="bottom__item"><a href="/" className="bottom__link">Settings</a></li>
            </ul>
          </div>
          <div className="sidebar__links flex">
            <a href="/" className="sidebar__link">
              <svg className="sidebar__svg" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"
                />
              </svg>
            </a>
            <a href="/" className="sidebar__link">
              <svg className="sidebar__svg" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-settings flex">
        {username ? (
          <div className="profile-settings__wrapper">
            <a className="profile-settings__link flex" href="/profile">
              <span className="profile-settings__round" />
              <span>
                {username}
              </span>
              {' '}
            </a>
            <a className="profile-settings__link" href="/auth/signout">Sign Out </a>
          </div>
        ) : (
          <div className="profile-settings__wrapper flex">
            <a className="profile-settings__link" href="/auth/signin">Sign In</a>
            <a className="profile-settings__link" href="/auth/signup">Sign Up</a>
          </div>
        )}
        <button className="profile-settings__button dark-mode" type="submit">
          <svg className="dark-mode-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

module.exports = Sidebar;
