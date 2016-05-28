import ReactObject from './../components/article-banner.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {injectAuthAction, composeArticleBanner} = composers;

export default composeAll(
  compose(composeArticleBanner),
  useDeps(injectAuthAction)
)(ReactObject);
