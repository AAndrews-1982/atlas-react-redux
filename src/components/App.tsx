import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-blue text-off-white-light font-poppins">
          <Header />
          <main className="flex-grow">
            <Board />
          </main>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
