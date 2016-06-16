export default ({context, id, Banner, classes}, onData) => {
  const {firebase} = context();
  const articleRef = firebase.database().ref(`content/article_group/articles/${id}`);
  articleRef.on('value', (articleData) => {
    const article = articleData.val();
    article.id = articleData.key;
    const {
      title,
      author,
      excerpt,
      body,
      image_url,
      date_updated
    } = article;

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const datePublished = new Date(date_updated).toLocaleTimeString('en-us', options);

    const byLine = `By: ${author ? author : 'Project NICE'}<br />Published ${datePublished}`;

    // const byLine = `By ${author ? author : 'Project NICE'}`;
    onData(null, {title, byLine, excerpt, body, classes, image_url, Banner});
  });
};
