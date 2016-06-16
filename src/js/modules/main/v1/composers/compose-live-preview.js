export default ({context, id, classes, Banner}, onData) => {
  const {articleStore} = context();

  onData(null, {
    title: 'Preview',
    byLine: 'By Project NICE',
    image_url: 'http://www.pepper.ph/wp-content/uploads/2013/11/Farm-Banner.jpg',
    Banner,
    classes
  });

  return articleStore.subscribe(() => {
    const {article: a} = articleStore.getState();
    const {
      title = 'Preview',
      author,
      excerpt,
      body,
      image_url = 'http://www.pepper.ph/wp-content/uploads/2013/11/Farm-Banner.jpg'
    } = a[id];
    const byLine = `By ${author ? author : 'Project NICE'}`;
    onData(null, {title, byLine, excerpt, body, classes, image_url, Banner});
  });
};
