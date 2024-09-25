import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteList } from '../slices/listsSlice';
import { RootState } from '../store';
import Card from './Card';
import NewCardForm from './NewCardForm';

interface ListProps {
  id: string;
  title: string;
}

const List: React.FC<ListProps> = ({ id, title }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => 
    Object.values(state.cards.cards).filter(card => card.listId === id)
  );

  const handleDeleteList = () => {
    if (window.confirm(`Are you sure you want to delete the list "${title}"?`)) {
      dispatch(deleteList({ listId: id }));
    }
  };

  return (
    <div className="group/list h-full min-w-96 p-4 bg-gray-100 rounded-lg relative">
      <button
        onClick={handleDeleteList}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors"
        title="Delete List"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {cards.map(card => (
        <Card key={card.id} id={card.id} title={card.title} description={card.description} />
      ))}
      <NewCardForm listId={id} />
    </div>
  );
};

export default List;
