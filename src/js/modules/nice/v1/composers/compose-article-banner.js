export default ({context, articleId}, onData) => {
  const {firebase} = context();
  const articleRef = firebase.database().ref(`content/article_group/articles/${articleId}`);
  // console.log(articleId)
  articleRef.on('value', (articleData) => {
    const {image_url, video, title, excerpt, author, date_updated} = articleData.val();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const datePublished = new Date(date_updated).toLocaleTimeString('en-us', options);

    // const datePublishedString = `${datePublished.getHours()}:${datePublished.getMinutes(), }`

    console.log(articleBanner);
    const articleBanner = {image_url, video, title, excerpt, author, datePublished};
    onData(null, {articleBanner});
  });
};
