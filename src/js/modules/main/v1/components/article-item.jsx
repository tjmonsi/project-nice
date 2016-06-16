import React from 'react';
import ReactMarkdown from 'react-markdown';

class ArticleSummary extends React.Component {
  render() {
    const {article} = this.props;
    const {title, excerpt, author, date_updated, id} = article;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const datePublished = new Date(date_updated).toLocaleTimeString('en-us', options);
    const markdown = `${excerpt}<br/>[Read more...](/article/read/${id})`;
    return (
      <div className="project-nice-article-item">
        <h1 className="project-nice-article-item-title">
          {title}
        </h1>
        <span className="project-nice-article-item-sub-description">
          {author ? `By ${author}` : null}<br/>
          Published {datePublished}
        </span>
        <div className="project-nice-article-item-excerpt">
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    );
  }
}

export default ArticleSummary;
