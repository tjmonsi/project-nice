import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Spinner extends React.Component {
  render() {
    const {
      classes,
      optionalClasses,
      fullWidth
    } = this.props;
    const suffix = `${prefix}-spinner`;
    const className = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const style = {
      width: fullWidth ? '100%' : null,
      paddingTop: fullWidth ? 50 : null,
      textAlign: 'center'
    };
    return (
      <div
        style = {style}
      >
        <div className = {className}>
        </div>
      </div>
    );
  }
}

export default Spinner;
