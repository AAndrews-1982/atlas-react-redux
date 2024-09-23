import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import DeleteListButton from './DeleteListButton';
import { deleteList } from '../slices/listsSlice'; // Ensure this import is correct

interface ListProps {
  id: string;
  title: string;
  cards: Array<{ title: string; description: string }>;
}

const List: React.FC<ListProps> = ({ id, title, cards }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleDelete = () => dispatch(deleteList(id)); // Handler for deleting the list

  return (
    <div
      className="list-container bg-light-blue p-4 rounded-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        {isHovered && (
          <DeleteListButton onDelete={handleDelete} /> // Use the handler here
        )}
      </div>
      <h3 className="text-lg font-normal text-white mb-4" style={{ textAlign: 'center', marginTop: '30px' }}>
        {title}
      </h3>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default List;
