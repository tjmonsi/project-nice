import React from 'react';
import libs from './../libs';
const {windowSize} = libs;

class ArticleBanner extends React.Component {
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
    const {heightPercent = 0.85} = this.props;
    const {height} = windowSize();
    const minHeight = (height - 16) * heightPercent;
    this.articleBanner.style['min-height'] = `${minHeight}px`;
  }
  render() {
    const {articleBanner} = this.props;
    const {image_url, video, title, excerpt, author, datePublished} = articleBanner;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0),
        rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${image_url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top'
    };
    const ref = (c) => {
      this.articleBanner = c;
    };
    return (
      <div
        className="mdl-grid v1-article-banner"
        ref = {ref}
        style = {style}
      >
        <div
          className="mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop
            mdl-cell--6-col-tablet mdl-cell--1-offset-tablet
            mdl-cell--4-col-phone mdl-cell--middle
            v1-article-banner-text-container"
        >
          <h1 className="v1-article-banner-title">
            {title}
          </h1>
          <span className="v1-article-banner-excerpt">
            {excerpt}<br/>
            <a href="">Read more...</a>
          </span>
          <br/>
          <div className="v1-article-banner-author">
            {author ? `By ${author}` : null}<br/>
            Published {datePublished}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleBanner;
