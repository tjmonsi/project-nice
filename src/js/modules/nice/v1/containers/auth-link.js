import ReactObject from './../components/auth-link.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {injectAuthAction, composeAuth} = composers;

export default composeAll(
  compose(composeAuth),
  useDeps(injectAuthAction)
)(ReactObject);