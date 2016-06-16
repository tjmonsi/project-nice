import {createStore} from 'redux';

const defaultState = {
  article: {}
};

export default createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ARTICLE':
      const obj = {};
      obj[action.key] = action.value;
      return Object.assign({}, state, {
        article: Object.assign({}, state.article, obj)
      });
    default:
      return state;
  }
});
