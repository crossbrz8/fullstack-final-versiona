import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import { configureStore } from '@reduxjs/toolkit';
import { monstersReducerExtended } from './monsters.reducer.extended';

describe('Monsters Service Extended', () => {
  // Mock the fetch function
  let mockFetch: jest.Mock;
  // Mock the store
  let store: any;

  beforeEach(() => {
    // Before each test, reset the mocked fetch function and create a fresh Redux store
    // This ensures tests don't affect each other
    mockFetch = jest.fn();
    global.fetch = mockFetch;
    store = configureStore({
      reducer: {
        monstersExtended: monstersReducerExtended,
      },
    });
  });

  it('should get the winner of the battle of monsters', async () => {
    const mockMonsters = {
      monster1: {
        id: '1',
        name: 'Monster 1',
        attack: 50,
        defense: 30,
        hp: 100,
        speed: 20,
        type: 'Fire',
        imageUrl: 'https://example.com/monster1.jpg',
      },
      monster2: {
        id: '2',
        name: 'Monster 2',
        attack: 40,
        defense: 40,
        hp: 80,
        speed: 30,
        type: 'Water',
        imageUrl: 'https://example.com/monster2.jpg',
      },
    };

    // Mock the API response to return monster1 as the winner
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ winner: mockMonsters.monster1, tie: false }),
    });

    // Dispatch the battle action
    const result = await store.dispatch(
      MonsterServiceExtended.battle({
        monster1Id: mockMonsters.monster1.id,
        monster2Id: mockMonsters.monster2.id,
      }),
    );

    // Verify that the fetch function was called with the correct arguments
    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monster1Id: mockMonsters.monster1.id,
        monster2Id: mockMonsters.monster2.id,
      }),
    });

    // Verify that the result payload is correct
    expect(result.payload).toEqual({
      winner: mockMonsters.monster1,
      tie: false,
    });
  });

  it('should handle battle API errors', async () => {
    // Mock the API response to return an error
    mockFetch.mockRejectedValueOnce(new Error('Error getting battle winner'));

    // Create mock monster objects with just IDs for testing the error case
    // We only need IDs here since we're testing the error handling, not the full battle logic
    const mockMonsters = {
      monster1: { id: '1' },
      monster2: { id: '2' },
    };

    try {
      await store.dispatch(
        MonsterServiceExtended.battle({
          monster1Id: mockMonsters.monster1.id,
          monster2Id: mockMonsters.monster2.id,
        }),
      );
    } catch (error: any) {
      expect(error.message).toBe('Error getting battle winner');
    }
  });
});
