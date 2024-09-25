import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import listsReducer from '../slices/listsSlice';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

const store = configureStore({
  reducer: {
    lists: listsReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-blue text-off-white-light font-poppins">
        <Header />
        <main className="flex-grow">
          <Board />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
