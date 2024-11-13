import { monstersReducerExtended } from './monsters.reducer.extended';
import { Monster } from '../../models/interfaces/monster.interface';
import { Battle } from '../../models/interfaces/battle.interface';

describe('Monsters Extended Reducer', () => {
  it('should change the battle on action fulfilled', () => {
    expect(monstersReducerExtended(undefined, { type: undefined })).toEqual({
      selectRandomMonster: null,
      winner: null,
    });
  });

  const mockMonster: Monster = {
    id: '1',
    name: 'Test Monster',
    attack: 50,
    defense: 40,
    hp: 100,
    speed: 30,
    type: 'test',
    imageUrl: 'test.jpg',
  };

  // Mock battle result data for use in tests
  const mockBattle: Battle = {
    winner: mockMonster,
    tie: false,
  };

  // Test case for setting a random monster
  // Verifies that the reducer correctly updates selectRandomMonster state
  it('should handle setting a random monster', () => {
    const action = {
      type: 'monsters/setRandomMonster',
      payload: mockMonster,
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state.selectRandomMonster).toEqual(mockMonster);
  });

  // Test case for setting battle winner
  // Verifies that the reducer correctly updates winner state
  it('should handle setting battle winner', () => {
    const action = {
      type: 'monsters/setWinner',
      payload: mockBattle,
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state.winner).toEqual(mockBattle);
  });

  // Test case for unknown action types
  // Ensures reducer doesn't modify state for unrecognized actions
  it('should not modify state for unknown action types', () => {
    const initialState = {
      selectRandomMonster: null,
      winner: null,
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: {},
    };

    const state = monstersReducerExtended(initialState, action);
    expect(state).toEqual(initialState);
  });
});
