import React, { useState } from 'react';
import Card from './Card';
import DeleteListButton from './DeleteListButton';

interface ListProps {
  title: string;
  cards: Array<{ title: string; description: string }>;
  onDelete: () => void;
}

const List: React.FC<ListProps> = ({ title, cards, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="list-container bg-light-blue p-4 rounded-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ height: '30px', position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        {isHovered && (
          <DeleteListButton onDelete={onDelete} />
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-4" style={{ textAlign: 'center', marginTop: '30px' }}>
        {title}
      </h3>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} onDelete={() => console.log('Delete card')} />
      ))}
    </div>
  );
};

export default List;
