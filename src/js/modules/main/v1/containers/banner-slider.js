import * as CompLib from './../../../comp-lib';
import SectionSpinner from './section-spinner';
const {BannerSlider: ReactObject} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeBannerSlider} from '../composers';

export default composeAll(
  compose(composeBannerSlider, SectionSpinner),
  useDeps()
)(ReactObject);
