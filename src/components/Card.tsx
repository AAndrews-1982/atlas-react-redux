import React from 'react';
import { useDispatch } from 'react-redux';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { deleteCard } from '../slices/cardsSlice';

interface CardProps {
  card: {
    id: string;
    title: string;
    description: string;
  };
  listId: string;
}

const Card: React.FC<CardProps> = ({ card, listId }) => {
  const dispatch = useDispatch();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: {
      listId: listId,
    },
  });

  const style = transform ? {
    transform: CSS.Transform.toString(transform),
  } : undefined;

  const handleDeleteCard = () => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      dispatch(deleteCard({ cardId: card.id }));
    }
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      {...attributes} 
      {...listeners}
      className="bg-off-white-light p-4 rounded shadow-md mb-2 relative text-black cursor-move"
    >
      <button
        onClick={handleDeleteCard}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors"
        title="Delete Card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h4 className="font-bold mb-2">{card.title}</h4>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
