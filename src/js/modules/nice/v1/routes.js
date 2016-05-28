import React from 'react';
import Page from './components/page.jsx';
import LogoText from './components/logo-text.jsx';
// import Home from './components/home.jsx';
import AuthLink from './containers/auth-link';
import Header from './containers/header';
import Drawer from './containers/drawer';
import HomeCarousel from './containers/home-carousel';
import ArticleBanner from './containers/article-banner';

export default (injectDeps, context) => {
  const {mount, page, qs} = context;
  const PageCtx = injectDeps(Page);
  const logo = () => (React.createElement(LogoText, {
    displayName: 'LogoText'
  }));
  const authLink = () => (React.createElement(AuthLink, {
    displayName: 'AuthLink'
  }));
  const articleBanner = (articleId) => (React.createElement(ArticleBanner, {
    displayName: 'ArticleBanner',
    articleId
  }));

  page('/', (ctx) => {
    mount(PageCtx, {
      displayName: 'PageCtx',
      header: () => (React.createElement(Header, {
        displayName: 'Header',
        logo,
        authLink
      })),
      drawer: () => (React.createElement(Drawer, {
        displayName: 'Drawer',
        logo,
        authLink
      })),
      sections: [
        () => (React.createElement(HomeCarousel, {
          displayName: 'HomeCarousel',
          articleBanner
        }))
      ]
    });
  });
};
