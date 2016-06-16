export default ({context}, onData) => {
  const {store} = context();
  const getState = () => {
    const {homeBanner} = store.getState();
    onData(null, {homeBanner});
  };
  getState();
  return store.subscribe(getState);
};
