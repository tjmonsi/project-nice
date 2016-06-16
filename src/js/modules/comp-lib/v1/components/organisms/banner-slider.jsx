import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class BannerSlider extends React.Component {
  renderBanner() {
    const {slides, banner, classes} = this.props;
    const width = slides && slides.length && slides.length > 0 ?
      `${(1 / slides.length) * 100}%` : '100%';
    return slides ? slides.map((slide, key) => {
      return banner(classes, slide, width, 'left');
    }) : null;
  }
  render() {
    const {
      slides,
      classes,
      optionalClasses,
      id
    } = this.props;
    const suffix = `${prefix}-banner-slider`;
    const className = classNames(
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const style = {
      width: slides && slides.length && slides.length > 0 ?
        `${slides.length * 100}%` : '100%',
      left: '0%',
      position: 'relative'
    };
    const leftRef = (c) => {
      this.leftButton = c;
    };
    const rightRef = (c) => {
      this.rightButton = c;
    };
    const slideRef = (c) => {
      this.slider = c;
    }
    return (
      <div
        className={className}
        id = {id}
      >

        <div
          style={style}
          ref = {slideRef}
        >

          {this.renderBanner()}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 50,
            height: 400,
            cursor: 'pointer'
          }}
          ref= {leftRef}
          onClick = { () => {
            if (this.slider) {
              const left = this.slider.style.left;
              const newLeft = isNaN(left) ? parseInt(left.replace('%', '').trim(), 10) - 100 : left - 100;
              this.slider.style.left = Math.abs(newLeft) >= parseInt(this.slider.style.width.replace('%', '').trim(), 10) ? `0%` : `${newLeft}%`;
            }
          }}
        >
        </div>
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 50,
            height: 400,
            cursor: 'pointer'
          }}
          ref= {rightRef}
          onClick = { () => {
            if (this.slider) {
              const left = this.slider.style.left;
              const newLeft = isNaN(left) ? parseInt(left.replace('%', '').trim(), 10) + 100 : left + 100;
              this.slider.style.left = newLeft > 0 ? `-${parseInt(this.slider.style.width.replace('%', '').trim(), 10) - 100}%` : `${newLeft}%`;
            }
          }}
        >
        </div>
      </div>
    );
  }
}

export default BannerSlider;
