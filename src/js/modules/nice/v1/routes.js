import React from 'react';
import Page from './components/page.jsx';
import LogoText from './components/logo-text.jsx';
// import Home from './components/home.jsx';
import Header from './containers/header';
import Drawer from './containers/drawer';

export default (injectDeps, context) => {
  const {mount, page, qs} = context;
  const PageCtx = injectDeps(Page);
  const logo = () => (React.createElement(LogoText, {
    displayName: 'LogoText'
  }));

  page('/', (ctx) => {
    mount(PageCtx, {
      displayName: 'PageCtx',
      header: () => (React.createElement(Header, {
        displayName: 'Header',
        logo
      })),
      drawer: () => (React.createElement(Drawer, {
        displayName: 'Drawer',
        logo
      })),
      sections: []
    });
  });

  page();
};
