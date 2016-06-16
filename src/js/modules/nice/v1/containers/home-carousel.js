import ReactObject from './../components/home-carousel.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {injectAuthAction, composeFrontPublished, composeHomeBanner} = composers;

export default composeAll(
  compose(composeFrontPublished),
  compose(composeHomeBanner),
  useDeps(injectAuthAction)
)(ReactObject);
