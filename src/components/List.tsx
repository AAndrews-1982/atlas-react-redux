import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../slices/listsSlice'; // Adjust the import path as needed
import Card from './Card'; // Adjust the import path as needed
import NewCardForm from './NewCardForm'; // Adjust the import path as needed

interface ListProps {
  list: {
    id: string;
    title: string;
    cards: Array<{ id: string; title: string; description: string }>;
  };
}

const List: React.FC<ListProps> = ({ list }) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    if (window.confirm(`Are you sure you want to delete the list "${list.title}"?`)) {
      dispatch(deleteList({ listId: list.id }));
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
      <h3 className="text-xl font-semibold mb-4">{list.title}</h3>
      {list.cards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
      <NewCardForm listId={list.id} />
    </div>
  );
};

export default List;
