import ReactObject from './../components/home-article-section.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {injectAuthAction, composePublished} = composers;

export default composeAll(
  compose(composePublished),
  // compose(composeHomeBanner),
  useDeps(injectAuthAction)
)(ReactObject);
