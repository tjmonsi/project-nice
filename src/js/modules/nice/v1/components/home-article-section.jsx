import React from 'react';

class HomeArticleSection extends React.Component {
  renderArticleList(published) {
    return published ? published.map((item, key) => {
      return (
        <div className="mdl-cell mdl-cell--12-col v1-home-article-section-list-item">
          <h1></h1>
        </div>
      );
    }) : null;
  }
  render() {
    const {published, summary} = this.props();
    return (
      <div className="mdl-grid">
        <div
          className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet
            mdl-cell--4-col-phone v1-home-article-section-content"
        >
          {summary && typeof summary === 'function' ? summary(published[0]) : null}
        </div>
        <div
          className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet
            mdl-cell--4-col-phone v1-home-article-section-list"
        >
          <div className="mdl-grid mdl-grid--no-spacing">
            {this.renderArticleList(published)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeArticleSection;
