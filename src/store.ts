import { configureStore } from '@reduxjs/toolkit';

// Create a simple reducer (replace this with actual reducers later)
const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Create the store
const store = configureStore({
  reducer, // replace this with actual slices or reducers
});

export default store;

