import React from 'react';

class AuthLink extends React.Component {
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
    return authData ? 'Logout' : 'Login';
  }
  render() {
    const {authData} = this.props;
    return (
      <a
        className="mdl-navigation__link"
        onClick={this.handleAuth}
        href=""
      >
        {this.renderText(authData)}
      </a>
    );
  }
}

export default AuthLink;
