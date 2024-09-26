import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core';
import { moveCard } from '../slices/listsSlice';
import { RootState } from '../store';
import List from './List';

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.lists.lists);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const activeCardId = active.id as string;
      const overListId = over.id as string;
      
      const sourceListId = lists.find(list => 
        list.cards.some(card => card.id === activeCardId)
      )?.id;
      
      if (sourceListId && sourceListId !== overListId) {
        dispatch(moveCard({
          cardId: activeCardId,
          sourceListId: sourceListId,
          destinationListId: overListId,
        }));
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex h-full space-x-4">
          {lists.map(list => (
            <List key={list.id} list={list} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Board;
