import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, clearBoard } from '../slices/listsSlice'; // Adjust the import path as needed

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const [newListTitle, setNewListTitle] = useState('');

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault();
    if (newListTitle.trim()) {
      dispatch(addList({ title: newListTitle }));
      setNewListTitle('');
    }
  };

  const handleClearBoard = () => {
    if (window.confirm('Are you sure you want to clear the entire board?')) {
      dispatch(clearBoard());
    }
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleAddList} className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="New List Title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-4 py-2 text-sm font-semibold text-off-white-light hover:bg-teal/90 transition-colors"
        >
          Add List
        </button>
      </form>
      <button
        onClick={handleClearBoard}
        className="rounded bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
      >
        Clear Board
      </button>
    </footer>
  );
};

export default Footer;
