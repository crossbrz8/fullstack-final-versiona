import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchBattleWins,
  setRandomMonster,
  setWinner,
} from './monsters.actions.extended';

// Interface defining the state shape for monster-related data
interface MonsterState {
  selectRandomMonster: Monster | null; // Stores the currently selected random monster
  winner: Battle | null; // Stores the winner of a battle
}

const initialState: MonsterState = {
  selectRandomMonster: null,
  winner: null,
};

export const monstersReducerExtended = createReducer(initialState, builder => {
  // Handles setting a randomly selected monster to the state
  builder.addCase(setRandomMonster, (state, action) => ({
    ...state,
    selectRandomMonster: action.payload,
  }));

  // Updates the winner of a battle in the state
  builder.addCase(setWinner, (state, action: PayloadAction<Battle | null>) => ({
    ...state,
    winner: action.payload,
  }));

  // Handles the pending state when fetching battle wins
  // No state changes needed, just maintaining current state
  builder.addCase(fetchBattleWins.pending, state => ({
    ...state,
  }));

  // Handles the rejected state when fetching battle wins fails
  // Resets the winner to null
  builder.addCase(fetchBattleWins.rejected, state => ({
    ...state,
  }));

  // Handles the successful fetch of battle wins
  // Updates the winner with the fetched data
  builder.addCase(fetchBattleWins.fulfilled, (state, action) => ({
    ...state,
    winner: action.payload,
  }));
});
