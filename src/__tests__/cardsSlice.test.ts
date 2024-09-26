import { describe, it, expect } from 'vitest';
import cardsReducer, {
  addCard,
  deleteCard,
  clearCards,
} from '../slices/cardsSlice';

describe('cards reducer', () => {
  it('should handle initial state', () => {
    expect(cardsReducer(undefined, { type: 'unknown' })).toEqual({});
  });

  it('should handle addCard', () => {
    const actual = cardsReducer(
      {},
      addCard({ id: '1', title: 'New Card', description: 'Test', listId: 'list1' })
    );
    expect(Object.keys(actual).length).toEqual(1);
    expect(actual['1'].title).toEqual('New Card');
  });

  it('should handle deleteCard', () => {
    const initialState = {
      '1': { id: '1', title: 'Test Card', description: 'Test', listId: 'list1' },
    };
    const actual = cardsReducer(initialState, deleteCard({ cardId: '1' }));
    expect(Object.keys(actual).length).toEqual(0);
  });

  it('should handle clearCards', () => {
    const initialState = {
      '1': { id: '1', title: 'Test Card', description: 'Test', listId: 'list1' },
    };
    const actual = cardsReducer(initialState, clearCards());
    expect(Object.keys(actual).length).toEqual(0);
  });
});
