import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

const App = () => {
  const appStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'var(--blue)', // Dark blue background
    color: 'white',
    width: '100%',
    overflowX: 'hidden'
  };

  const headerFooterStyle: React.CSSProperties = {
    backgroundColor: ' --beige', // Beige background for header and footer
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
  };

  const mainStyle: React.CSSProperties = {
    marginTop: '60px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <Provider store={store}>
      <div style={appStyle}>
        <div style={headerFooterStyle}>
          <Header />
        </div>
        <main style={mainStyle}>
          <Board />
        </main>
        <div style={headerFooterStyle}>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
