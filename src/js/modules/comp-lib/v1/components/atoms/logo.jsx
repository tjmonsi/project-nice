import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Logo extends React.Component {
  renderTitle() {
    const {image, label} = this.props;
    if (image) {
      return (
        <img
          src={image}
          alt={label}
        />
      );
    }
    return (
      <span>
        {label && typeof label === 'string' ? label : 'Logo'}
      </span>
    );
  }
  render() {
    const {
      url,
      classes,
      optionalClasses,
    } = this.props;
    const suffix = `${prefix}-logo`;
    const className = classNames(
      'mdl-layout-title',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <span
        className={className}
      >
        <a href={url && typeof url === 'string' ? url : '/'}>
          <img
            style = {{height: 40 , paddingRight: 10}}
            src="https://firebasestorage.googleapis.com/v0/b/project-nice.appspot.com/o/lifebank-logo-2.png?alt=media&token=0d59f8f5-c5d8-4c5c-a1da-044375d06199" />
          {this.renderTitle()}
        </a>
      </span>
    );
  }
}

export default Logo;
