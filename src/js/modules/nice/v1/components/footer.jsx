import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="mdl-mini-footer v1-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">Project NICE</div>
          <ul className="mdl-mini-footer__link-list">
            <li>
              <a href="https://github.com/tjmonsi/project-nice">
                Github
              </a>
            </li>
            <li>
              <a href="https://github.com/tjmonsi/project-nice/issues">
                Submit an Issue / Bug Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
