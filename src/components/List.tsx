import React from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';
import DeleteListButton from './DeleteListButton';

const List = ({ title }) => {
  // Example cards data
  const cards = [
    { id: 1, title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
    { id: 2, title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
    { id: 3, title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
  ];

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {cards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
      <NewCardForm />
    </div>
  );
};

export default List;
