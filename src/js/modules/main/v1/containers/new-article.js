import * as CompLib from './../../../comp-lib';
const {GeneralGrid: ReactObject, Spinner} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeNewArticleGrid} from '../composers';

export default composeAll(
  compose(composeNewArticleGrid, Spinner),
  useDeps()
)(ReactObject);
