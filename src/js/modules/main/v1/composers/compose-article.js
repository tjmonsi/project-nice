export default ({context, id, classes}, onData) => {
  const {firebase} = context();
  const articleRef = firebase.database().ref(`content/article_group/articles/${id}`);
  articleRef.on('value', (articleData) => {
    const article = articleData.val();
    article.id = articleData.key;
    onData(null, {article});
  });
};
