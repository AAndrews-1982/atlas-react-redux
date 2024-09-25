import React from 'react';
import List from './List';

const Board = () => {
  // Example data
  const lists = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Done' },
  ];

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map(list => (
          <List key={list.id} title={list.title} />
        ))}
      </div>
    </div>
  );
};

export default Board;
