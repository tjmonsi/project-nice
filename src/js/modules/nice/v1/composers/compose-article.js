export default ({context, articleId}, onData) => {
  const {firebase} = context();
  const articleRef = firebase.database().ref(`content/article_group/articles/${articleId}`);
  articleRef.on('value', (articleData) => {
    const article = articleData.val();
    onData(null, {article});
  });
};
