export default ({context, limit = 5, article}, onData) => {
  const {firebase} = context();
  const ref = firebase
    .database()
    .ref('content/article_group/article_category/published')
    .orderByValue()
    .limitToLast(limit);

  ref.on('value', (result) => {
    const data = result.val();
    const arr = [];
    for (let i in data) {
      if (i !== null && data[i]) {
        arr.push([ i, data[i] ]);
      }
    }
    const published = arr
      .sort((a, b) => (new Date(a[1]) < new Date(b[1])))
      .map((a) => (a[0]));

    console.log(published);

    onData(null, {published, article});

  });
};
