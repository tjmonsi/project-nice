import React from 'react';
import * as CompLib from './../../../comp-lib';
import ArticleItem from './article-item';
const {GeneralGrid: ReactObject, Blank} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composePublished} from '../composers';

const composer = ({classes, articles}, onData) => {
  const sections = [];
  for (let i in articles) {
    if (articles[i]) {
      sections.push((c) => (React.createElement(ArticleItem, {
        classes: c,
        id: articles[i]
      })));
    }
  }
  onData(null, {classes, sections, column: 1, title: 'Articles'});
};

const component = composeAll(
  compose(composer, Blank),
  useDeps()
)(ReactObject);

export default composeAll(
  compose(composePublished, Blank),
  useDeps()
)(component);
