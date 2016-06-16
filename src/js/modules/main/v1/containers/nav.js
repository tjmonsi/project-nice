import * as CompLib from './../../../comp-lib';
const {Nav: ReactObject, Spinner} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeNav} from '../composers';

export default composeAll(
  compose(composeNav, Spinner),
  useDeps()
)(ReactObject);
