import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import {classList, prefix, windowSize} from './../../libs';

class Banner extends React.Component {
  constructor() {
    super();
    this.bannerResize = this.bannerResize.bind(this);
  }
  componentDidMount() {
    if (window) {
      this.bannerResize();
      window.addEventListener('resize', this.bannerResize);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.bannerResize);
    }
  }
  bannerResize() {
    const {heightPercent = 0.5} = this.props;
    const {height} = windowSize();
    const minHeight = (height - 16) * heightPercent;
    this.banner.style['min-height'] = `${minHeight}px`;
  }
  render() {
    const {
      title,
      description,
      float,
      subDescription,
      callToActionText,
      callToActionUrl,
      callToActionHandler,
      textAlign = 'center',
      width,
      backgroundImage,
      classes,
      optionalClasses,
      id
    } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0),
        rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      paddingBottom: 40,
      width,
      float,
      textAlign
    };
    const suffix = `${prefix}-banner`;
    const className = classNames(
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const innerSuffix = `${suffix}-inner`;
    const innerClassName = classNames(
      'mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop',
      'mdl-cell--6-col-tablet mdl-cell--1-offset-tablet',
      'mdl-cell--4-col-phone mdl-cell--middle',
      classList(classes, innerSuffix),
      classList(optionalClasses, innerSuffix)
    );
    const ref = (c) => {
      this.banner = c;
    };
    return (
      <div
        className={className}
        id = {id}
        style = {style}
        ref = {ref}
      >
        <div className='mdl-grid'>
          <div
            className={innerClassName}
          >
            <h1 className={`${suffix}-title`}>
              {title}
            </h1>
            <span className={`${suffix}-description`}>
              <ReactMarkdown source={description}/>
              <a
                className={`${suffix}-anchor`}
                href={callToActionUrl ? callToActionUrl : '#'}
              >
                {callToActionText}
              </a>
            </span>
            <div className={`${suffix}-sub-description`}>
              <ReactMarkdown source={subDescription} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
