import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../slices/cardsSlice';

interface CardProps {
  id: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const handleDeleteCard = () => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      dispatch(deleteCard({ cardId: id }));
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-2 relative">
      <button
        onClick={handleDeleteCard}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors"
        title="Delete Card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h4 className="font-bold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
