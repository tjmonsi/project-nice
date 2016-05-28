import React from 'react';

class HomeCarousel extends React.Component {
  renderArticleBanner() {
    const {front_published, articleBanner} = this.props;
    return front_published ? front_published.map((item, key) => {
      return (
        <div className="v1-article-banner">
          {articleBanner(item)}
        </div>
      );
    }) : null;
  }
  render() {
    // const {suistainable, articleBanner} = this.props;
    return (
      <div className="mdl-cell mdl-cell--12-col v1-home-carousel">
        {this.renderArticleBanner()}
      </div>
    );
  }
}

export default HomeCarousel;
