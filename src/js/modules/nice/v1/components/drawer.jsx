import React from 'react';

class Drawer extends React.Component {
  render() {
    const {authLink, logo} = this.props;
    return (
      <div className="mdl-layout__drawer v1-drawer">
        {logo && typeof logo === 'function' ? logo() : null}
        <nav className="mdl-navigation">
          {authLink && typeof authLink === 'function' ? authLink() : null}
        </nav>
      </div>
    );
  }
}

export default Drawer;
