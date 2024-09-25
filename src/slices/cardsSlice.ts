import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  title: string;
  description: string;
  listId: string;
}

interface CardsState {
  cards: Record<string, Card>;
}

const initialState: CardsState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCard: (state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
      const { listId, title, description } = action.payload;
      const newCard: Card = {
        id: Date.now().toString(),
        title,
        description,
        listId,
      };
      state.cards[newCard.id] = newCard;
    },
    deleteCard: (state, action: PayloadAction<{ cardId: string }>) => {
      const { cardId } = action.payload;
      delete state.cards[cardId];
    },
    clearCards: (state) => {
      state.cards = {};
    },
  },
});

export const { createCard, deleteCard, clearCards } = cardsSlice.actions;
export default cardsSlice.reducer;
