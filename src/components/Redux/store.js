import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
}

const store = configureStore({reducer});

export default store;








