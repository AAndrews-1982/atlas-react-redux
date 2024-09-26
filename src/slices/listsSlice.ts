import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  title: string;
  description: string;
}

interface List {
  id: string;
  title: string;
  cards: Card[];
}

interface ListsState {
  lists: List[];
}

const initialState: ListsState = {
  lists: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList: List = {
        id: Date.now().toString(),
        title: action.payload.title,
        cards: [],
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload.listId);
    },
    addCard: (state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
      const { listId, title, description } = action.payload;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cards.push({
          id: Date.now().toString(),
          title,
          description,
        });
      }
    },
    clearBoard: (state) => {
      state.lists = [];
    },
    moveCard: (state, action: PayloadAction<{ 
      cardId: string; 
      sourceListId: string; 
      destinationListId: string;
    }>) => {
      const { cardId, sourceListId, destinationListId } = action.payload;
      const sourceList = state.lists.find(list => list.id === sourceListId);
      const destinationList = state.lists.find(list => list.id === destinationListId);

      if (sourceList && destinationList) {
        const cardIndex = sourceList.cards.findIndex(card => card.id === cardId);
        if (cardIndex !== -1) {
          const [movedCard] = sourceList.cards.splice(cardIndex, 1);
          destinationList.cards.push(movedCard);
        }
       }
     },
  },
});

export const { addList, deleteList, addCard, clearBoard, moveCard } = listsSlice.actions;
export default listsSlice.reducer;
