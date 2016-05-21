import React from 'react';

class Drawer extends React.Component {
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
      <div className="mdl-layout__drawer v1-drawer">
         {logo && typeof logo === 'function' ? logo() : null}
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Home</a>
          <a
            className="mdl-navigation__link"
            onClick={this.handleAuth}
            href=""
          >
            {this.renderText(authData)}
          </a>
        </nav>
      </div>
    );
  }
}

export default Drawer;
