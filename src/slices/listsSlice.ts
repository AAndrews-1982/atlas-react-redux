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
  },
});

export const { addList, deleteList, addCard, clearBoard } = listsSlice.actions;
export default listsSlice.reducer;
