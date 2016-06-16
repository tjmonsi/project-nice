import * as CompLib from './../../../comp-lib';
const {Spinner: ReactObject} = CompLib;
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({classes, optionalClasses}, onData) => {
  onData(null, {classes, optionalClasses});
};

export default composeAll(
  compose(composer),
  useDeps()
)(ReactObject);
