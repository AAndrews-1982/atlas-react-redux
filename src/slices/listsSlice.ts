import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  title: string;
  description: string;
}

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface ListsState {
  lists: List[];
  cards: { [key: string]: Card };
}

const initialState: ListsState = {
  lists: [],
  cards: {},
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList: List = {
        id: Date.now().toString(),
        title: action.payload.title,
        cardIds: [],
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload.listId);
    },
    addCard: (state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
      const { listId, title, description } = action.payload;
      const newCard: Card = {
        id: Date.now().toString(),
        title,
        description,
      };
      state.cards[newCard.id] = newCard;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds.push(newCard.id);
      }
    },
    clearBoard: (state) => {
      state.lists = [];
      state.cards = {};
    },
  },
});

export const { addList, deleteList, addCard, clearBoard } = listsSlice.actions;
export default listsSlice.reducer;
