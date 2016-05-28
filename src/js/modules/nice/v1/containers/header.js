import ReactObject from './../components/header.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {injectAuthAction, composeLogo, composeAuthLink} = composers;

export default composeAll(
  compose(composeAuthLink),
  compose(composeLogo),
  useDeps(injectAuthAction)
)(ReactObject);
