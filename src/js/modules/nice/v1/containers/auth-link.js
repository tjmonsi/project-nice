import ReactObject from './../components/auth-link.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {injectAuthAction, composeAuth} from './composer';

export default composeAll(
  compose(composeAuth),
  useDeps(injectAuthAction)
)(ReactObject);
