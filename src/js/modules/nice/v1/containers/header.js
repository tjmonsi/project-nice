import ReactObject from './../components/header.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {injectAuthAction, composeLogo, composeAuthLink} from './composer';

export default composeAll(
  compose(composeAuthLink),
  compose(composeLogo),
  useDeps(injectAuthAction)
)(ReactObject);
