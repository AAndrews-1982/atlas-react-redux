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
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Card Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Card Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Card
      </button>
    </form>
  );
};

export default NewCardForm;
