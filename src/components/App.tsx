import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import listsReducer from '../slices/listsSlice';
import cardsReducer from '../slices/cardsSlice'; // Make sure to import this
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

// Create the store outside of the component
const store = configureStore({
  reducer: {
    lists: listsReducer,
    cards: cardsReducer, // Add the cards reducer
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

const App: React.FC = () => {
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
