import React from 'react';
import ReactMarkdown from 'react-markdown';

class Article extends React.Component {
  render() {
    const {title, byLine, excerpt, image_url, body, Banner} = this.props;
    console.log(Banner);
    return (
      <div className="project-nice-article">
        <Banner
          title = {title}
          description = {excerpt}
          subDescription = {byLine}
          backgroundImage = {image_url}
          heightPercent = {0.5}
          classes = "project-nice"
        />
        <div style={{
          padding: 0
        }}>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-phone">

              <ReactMarkdown source={body} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
