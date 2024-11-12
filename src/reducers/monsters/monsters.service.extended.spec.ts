import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import { configureStore } from '@reduxjs/toolkit';
import { monstersReducerExtended } from './monsters.reducer.extended';

describe('Monsters Service Extended', () => {
  let mockFetch: jest.Mock;
  let store: any;

  beforeEach(() => {
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

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ winner: mockMonsters.monster1, tie: false }),
    });

    const result = await store.dispatch(
      MonsterServiceExtended.battle({
        monster1Id: mockMonsters.monster1.id,
        monster2Id: mockMonsters.monster2.id,
      }),
    );

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

    expect(result.payload).toEqual({
      winner: mockMonsters.monster1,
      tie: false,
    });
  });

  it('should handle battle API errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Error getting battle winner'));

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
