import * as CompLib from './../../../comp-lib';
const {Spinner} = CompLib;
import ReactObject from './../components/article.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeViewArticle} from '../composers';

export default composeAll(
  compose(composeViewArticle, Spinner),
  useDeps()
)(ReactObject);
