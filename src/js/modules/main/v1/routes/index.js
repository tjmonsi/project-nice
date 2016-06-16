import * as CompLib from './../../../comp-lib';
import Nav from './../containers/nav';
import React from 'react';
import root from './root';
import dashboard from './dashboard';
import articleEditor from './article-editor';
import articleAdd from './article-add';
import viewArticle from './view-article';

export default (injectDeps, context) => {
  const {
    Page,
    Logo
  } = CompLib;
  const {mount, page} = context;
  const PageCtx = injectDeps(Page);

  const logo = (classes, navpos) => (React.createElement(Logo, {
    classes,
    navpos,
    label: 'Network of Information and Collaboration Exchange'
  }));

  const nav = (classes, navpos, alwaysVisible) => (React.createElement(Nav, {
    classes,
    navpos,
    alwaysVisible
  }));

  root(React, {
    PageCtx,
    mount,
    page,
    CompLib,
    logo,
    nav
  });

  dashboard(React, {
    PageCtx,
    mount,
    page,
    CompLib,
    logo,
    nav
  });

  // console.log(articleEditor)

  articleEditor(React, {
    PageCtx,
    mount,
    page,
    CompLib,
    logo,
    nav
  });

  articleAdd(React, {
    PageCtx,
    mount,
    page,
    CompLib,
    logo,
    nav
  });

  viewArticle(React, {
    PageCtx,
    mount,
    page,
    CompLib,
    logo,
    nav
  });
};
