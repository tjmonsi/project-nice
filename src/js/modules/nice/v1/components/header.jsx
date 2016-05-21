import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.handleAuth = this.handleAuth.bind(this);
  }
  handleAuth() {
    const {login, logout, authData} = this.props;
    if (authData) {
      logout();
    } else {
      login();
    }
  }
  renderText(authData) {
    return authData ? 'Logout' : 'Login / Signup';
  }
  render() {
    const {authData, logo} = this.props;
    return (
      <header className="mdl-layout__header v1-header">
        <div className="mdl-layout__header-row">
          {logo && typeof logo === 'function' ? logo() : null}
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <a
              className="mdl-navigation__link"
              onClick={this.handleAuth}
              href=""
            >
              {this.renderText(authData)}
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
