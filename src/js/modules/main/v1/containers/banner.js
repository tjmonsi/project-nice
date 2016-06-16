import * as CompLib from './../../../comp-lib';
const {Banner: ReactObject, Blank} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeBanner} from '../composers';

export default composeAll(
  compose(composeBanner, Blank),
  useDeps()
)(ReactObject);
