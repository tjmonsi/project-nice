import React from 'react';
import classNames from 'classnames';

class HomeCarousel extends React.Component {
  renderArticleBanner() {
    const {front_published, articleBanner, homeBanner} = this.props;
    const articleId = homeBanner ? homeBanner : front_published[0];

    return front_published ? front_published.map((item, key) => {
      const homeBannerFlag = articleId !== item ? 'v1-home-carousel-article-banner-hidden' : '';
      const className = classNames('v1-home-carousel-article-banner', homeBannerFlag);
      return (
        <div className={className}>
          {articleBanner(item)}
        </div>
      );
    }) : null;
  }
  render() {
    // const {suistainable, articleBanner} = this.props;
    return (
      <div className="v1-home-carousel">
        {this.renderArticleBanner()}
      </div>
    );
  }
}

export default HomeCarousel;
