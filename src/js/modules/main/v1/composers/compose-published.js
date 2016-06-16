export default ({
  context,
  limit = 5,
  start = 0,
  startAt,
  classes,
  optionalClasses,
  id
}, onData) => {
  const {firebase} = context();
  const ref = firebase
    .database()
    .ref('content/article_group/article_category/published')
    .orderByValue()
    .limitToLast(start + limit);

  if (startAt && typeof startAt === 'string') {
    ref.startAt(startAt);
  }

  ref.on('value', (result) => {
    const data = result.val();
    const arr = [];
    for (let i in data) {
      if (i !== null && data[i]) {
        arr.push([ i, data[i] ]);
      }
    }
    const arr2 = arr
      .sort((a, b) => (new Date(a[1]) > new Date(b[1])))
      .map((a) => (a[0]));

    // console.log(arr2);
    for (let i = 0; i < start; i++) {
      arr2.pop();
    }

    const articles = arr2.reverse();
    console.log(articles);

    onData(null, {articles, classes, optionalClasses});

  });
};
