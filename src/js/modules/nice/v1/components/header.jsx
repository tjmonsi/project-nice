import React from 'react';

class Header extends React.Component {
  render() {
    const {logo, authLink} = this.props;
    return (
      <header className="mdl-layout__header v1-header">
        <div className="mdl-layout__header-row">
          {logo && typeof logo === 'function' ? logo() : null}
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            {authLink && typeof authLink === 'function' ? authLink() : null}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
