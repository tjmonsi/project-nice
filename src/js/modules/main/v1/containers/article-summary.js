// import React from 'react';
import * as CompLib from './../../../comp-lib';
import ReactObject from './../components/article-summary.jsx';
const {Blank} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticle} from '../composers';

const composer = ({classes, article}, onData) => {
  // TODO: add auth here
  onData(null, {classes, article});
};

const component = composeAll(
  compose(composeArticle, Blank),
  useDeps()
)(ReactObject);

export default composeAll(
  compose(composer, Blank),
  useDeps()
)(component);
