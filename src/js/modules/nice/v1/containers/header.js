import ReactObject from './../components/header.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {injectAuthAction, composeLogo} from './composer';

export default composeAll(
  compose(composeLogo),
  useDeps(injectAuthAction)
)(ReactObject);
