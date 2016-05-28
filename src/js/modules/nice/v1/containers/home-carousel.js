import ReactObject from './../components/home-carousel.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {injectAuthAction, composeFront} = composers;

export default composeAll(
  compose(composeFront),
  useDeps(injectAuthAction)
)(ReactObject);
