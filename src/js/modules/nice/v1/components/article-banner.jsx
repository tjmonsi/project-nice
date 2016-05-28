import React from 'react';
// import libs from './../libs';
// const {windowSize} = libs;

class ArticleBanner extends React.Component {
  // constructor() {
  //   super();
    // this.bannerResize = this.bannerResize.bind(this);
  // }
  // componentDidMount() {
  //   if (window) {
  //     this.bannerResize();
  //     window.addEventListener('resize', this.bannerResize);
  //   }
  // }
  // componentWillUnmount() {
  //   if (window) {
  //     window.removeEventListener('resize', this.bannerResize);
  //   }
  // }
  // bannerResize() {
  //   const {heightPercent = 0.5} = this.props;
  //   const {height} = windowSize();
  //   const minHeight = (height - 16) * heightPercent;
  //   this.articleBanner.style['min-height'] = `${minHeight}px`;
  // }
  render() {
    // const {articleBanner} = this.props;
    // const {image_url, video, title, excerpt} = articleBanner;
    // const style = {
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0),
    //     rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${image_url})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center top'
    // };

    return (
      <div
        className="mdl-cell mdl-cell--12-col v1-article-banner"
        // ref = {func}
        // style = {style}
      >

      </div>
    );
  }
}

export default ArticleBanner;
