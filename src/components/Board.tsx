import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const Board = () => {
  const lists = useSelector((state) => state.lists.lists);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map(list => (
          <List key={list.id} id={list.id} title={list.title} />
        ))}
      </div>
    </div>
  );
};

export default Board;
