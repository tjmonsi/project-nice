import React from 'react';
import * as CompLib from './../../../comp-lib';
import ArticleSummary from './article-summary';
const {GeneralGrid: ReactObject, Blank} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composePublished} from '../composers';

const composer = ({classes, articles}, onData) => {
  const sections = [];
  for (let i in articles) {
    if (articles[i]) {
      sections.push((c) => (React.createElement(ArticleSummary, {
        classes: c,
        id: articles[i]
      })));
    }
  }
  onData(null, {classes, sections, column: 1});
};

const component = composeAll(
  compose(composer, Blank),
  useDeps()
)(ReactObject);

export default composeAll(
  compose(composePublished, Blank),
  useDeps()
)(component);
