import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust the import path as needed
import List from './List'; // Adjust the import path as needed

const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map(list => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default Board;
