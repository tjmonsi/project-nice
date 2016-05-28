import {createStore} from 'redux';

const defaultState = {
  snack: [],
  homeBanner: null
};

export default createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SNACK':
      return Object.assign({}, state, {
        snack: [
          ...state.snack,
          action.value
        ]
      });
    case 'REMOVE_SNACK':
      const index = state.snack.indexOf(action.value);
      return index < 0 ? state :
        Object.assign({}, state, {
          snack: [
            ...state.snack.slice(0, index),
            ...state.snack.slice(index + 1)
          ]
        });
    case 'SET_BANNER':
      return Object.assign({}, state, {
        homeBanner: action.value
      });
    default:
      return state;
  }
});
