import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteList } from '../slices/listsSlice';
import Card from './Card';
import NewCardForm from './NewCardForm';
import DeleteListButton from './DeleteListButton';

const List = ({ id, title }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => 
    state.lists.lists.find(list => list.id === id)?.cardIds.map(cardId => state.lists.cards[cardId]) || []
  );

  const handleDeleteList = () => {
    dispatch(deleteList({ listId: id }));
  };

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton onDelete={handleDeleteList} />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {cards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
      <NewCardForm listId={id} />
    </div>
  );
};

export default List;
