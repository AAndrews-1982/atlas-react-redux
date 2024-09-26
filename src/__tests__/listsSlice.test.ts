import { describe, it, expect } from 'vitest';
import listsReducer, {
  addList,
  deleteList,
  addCard,
  clearBoard,
  moveCard,
} from '../slices/listsSlice';

describe('lists reducer', () => {
  it('should handle initial state', () => {
    expect(listsReducer(undefined, { type: 'unknown' })).toEqual({ lists: [] });
  });

  it('should handle addList', () => {
    const actual = listsReducer({ lists: [] }, addList({ title: 'New List' }));
    expect(actual.lists.length).toEqual(1);
    expect(actual.lists[0].title).toEqual('New List');
  });

  it('should handle deleteList', () => {
    const initialState = {
      lists: [{ id: '1', title: 'Test List', cards: [] }],
    };
    const actual = listsReducer(initialState, deleteList({ listId: '1' }));
    expect(actual.lists.length).toEqual(0);
  });

  it('should handle addCard', () => {
    const initialState = {
      lists: [{ id: '1', title: 'Test List', cards: [] }],
    };
    const actual = listsReducer(
      initialState,
      addCard({ listId: '1', title: 'New Card', description: 'Test' })
    );
    expect(actual.lists[0].cards.length).toEqual(1);
    expect(actual.lists[0].cards[0].title).toEqual('New Card');
  });

  it('should handle clearBoard', () => {
    const initialState = {
      lists: [{ id: '1', title: 'Test List', cards: [] }],
    };
    const actual = listsReducer(initialState, clearBoard());
    expect(actual.lists.length).toEqual(0);
  });

  it('should handle moveCard', () => {
    const initialState = {
      lists: [
        { id: '1', title: 'List 1', cards: [{ id: 'card1', title: 'Card 1', description: 'Test' }] },
        { id: '2', title: 'List 2', cards: [] },
      ],
    };
    const actual = listsReducer(
      initialState,
      moveCard({ cardId: 'card1', sourceListId: '1', destinationListId: '2' })
    );
    expect(actual.lists[0].cards.length).toEqual(0);
    expect(actual.lists[1].cards.length).toEqual(1);
    expect(actual.lists[1].cards[0].title).toEqual('Card 1');
  });
});
