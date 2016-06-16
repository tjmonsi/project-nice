export default {
  addArticle: ({firebase, page}, data) => {

    if (!data.image_url) {
      data.image_url = 'http://www.pepper.ph/wp-content/uploads/2013/11/Farm-Banner.jpg';
    }
    data.date_created = new Date().toString();
    data.date_updated = new Date().toString();

    console.log(data);

    const user = firebase.auth().currentUser;

    if (user) {
      console.log(user.uid);
      const key = firebase.database()
        .ref('/content/article_group/articles').push().key;
      const updates = {};
      updates[`/content/article_group/articles/${key}`] = data;
      updates[`/content/article_group/article_owners/${key}`] = user.uid;

      if (data.published) {
        updates[`/content/article_group/article_category/front_published/${key}`] =
          new Date().toString();
        updates[`/content/article_group/article_category/published/${key}`] =
          new Date().toString();
      } else {
        updates[`/content/article_group/article_category/draft/${key}`] =
          new Date().toString();
      }

      firebase.database().ref().update(updates);
      page(`/article/read/${key}`);
    }

  },
  livePreview: ({articleStore}, key, value) => {
    // const {articleStore} = context;
    articleStore.dispatch({
      type: 'UPDATE_ARTICLE',
      key,
      value
    });
  }
};
