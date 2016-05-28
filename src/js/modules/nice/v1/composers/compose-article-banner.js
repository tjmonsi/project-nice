export default ({context, articleId}, onData) => {
  const {firebase} = context();
  const articleRef = firebase.database().ref(`content/article_group/articles/${articleId}`);
  articleRef.on('value', (articleData) => {
    const {image_url, video, title, excerpt} = articleData.val();
    const articleBanner = {image_url, video, title, excerpt};
    // console.log(articleBanner);
    onData(null, {articleBanner});
  });
};
