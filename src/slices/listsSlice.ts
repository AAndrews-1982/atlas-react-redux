import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'; // For generating unique IDs

// Define a type for the card in a list

type Card = {
  id: string;
  title: string;
  description: string;
};

// Define a type for the list

type List = {
  id: string;
  title: string;
  cardIds: string[]; // Array of card IDs
};

// Define the initial state with type

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
    
    // Reducer to add a new list

    addList: {
      reducer: (state, action: PayloadAction<List>) => {
        state.lists.push(action.payload);
      },
      prepare: (title: string) => ({ payload: { id: nanoid(), title, cardIds: [] } })
    },


    // Reducer to delete a list

    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },


    // Reducer to add a card ID to a list

    addCardToList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
      const { listId, cardId } = action.payload;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds.push(cardId); // Only push card ID
      }
    },

    // Reducer to clear all lists

    clearBoard: (state) => {
      state.lists = [];
    }
  }
});

export const { addList, deleteList, addCardToList, clearBoard } = listsSlice.actions;

export default listsSlice.reducer;
