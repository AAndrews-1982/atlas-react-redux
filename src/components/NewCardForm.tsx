import React, { useState } from 'react';

interface NewCardFormProps {
  onSave: (title: string, description: string) => void; // Function to call when the save button is clicked
}

const NewCardForm: React.FC<NewCardFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (title.trim() && description.trim()) {
      onSave(title, description);
      setTitle(''); // Clear the form after saving
      setDescription('');
    }
  };

  return (
    <div className="border-2 border-blue-500 bg-light-beige p-4 rounded-lg w-full max-w-sm mx-auto">
      <h5 className="text-xl font-bold text-blue mb-2">New Card</h5>
      
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-2 text-blue"
      />
      
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4 text-blue"
        rows={4}
      />
      
      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-light"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewCardForm;
