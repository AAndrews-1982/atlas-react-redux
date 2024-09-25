import React from 'react';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-blue text-off-white-light font-poppins">
      <Header />
      <main className="flex-grow">
        <Board />
      </main>
      <Footer />
    </div>
  );
};

export default App;
