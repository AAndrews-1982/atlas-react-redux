import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCard } from '../slices/cardsSlice';

interface NewCardFormProps {
  listId: string;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(createCard({ listId, title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-blue p-4 rounded shadow-md">
      <div className="mb-3">
        <label htmlFor="cardTitle" className="block text-off-white-light text-sm font-bold mb-2">
          Card Title
        </label>
        <input
          type="text"
          id="cardTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-off-white-light text-blue rounded"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cardDescription" className="block text-off-white-light text-sm font-bold mb-2">
          Card Description
        </label>
        <textarea
          id="cardDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-off-white-light text-blue rounded"
          rows={3}
          required
        />
      </div>
      <div className="text-right">
        <input 
          type="submit" 
          value="Add Card" 
          className="text-teal font-bold cursor-pointer hover:text-teal/80 transition-colors"
        />
      </div>
    </form>
  );
};

export default NewCardForm;
