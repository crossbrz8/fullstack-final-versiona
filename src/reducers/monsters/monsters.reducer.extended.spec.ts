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

  // Example monster data for testing
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

  // Example battle result data for testing
  const mockBattle: Battle = {
    winner: mockMonster,
    tie: false,
  };

  // Add more specific tests based on your actions
  // These will need to be updated once you implement the reducer actions
  it('should handle setting a random monster', () => {
    const action = {
      type: 'monsters/setRandomMonster',
      payload: mockMonster,
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state.selectRandomMonster).toEqual(mockMonster);
  });

  it('should handle setting battle winner', () => {
    const action = {
      type: 'monsters/setWinner',
      payload: mockBattle,
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state.winner).toEqual(mockBattle);
  });

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
