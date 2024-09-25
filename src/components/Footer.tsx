import React from 'react';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Create list');
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="List title"
          name="title"
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-4 py-2 text-lg font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          onClick={() => alert('Clear board')}
          type="button"
          className="rounded bg-teal px-4 py-2 text-lg font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};

export default Footer;
