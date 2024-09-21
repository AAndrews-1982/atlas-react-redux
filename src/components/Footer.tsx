import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Create list: ' + title);
    setTitle(''); // Clear the input after submission
  };

  const handleClearBoard = () => {
    alert('Clear board');
    setTitle(''); // Clear the input
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center border-t-2 border-blue bg-light-beige p-8">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="List title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-0 bg-transparent text-xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-4 py-2 text-lg font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleClearBoard}
          className="rounded bg-teal px-4 py-2 text-lg font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};

export default Footer;
