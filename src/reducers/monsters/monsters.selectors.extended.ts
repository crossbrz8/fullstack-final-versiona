import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { selectSelectedMonster } from './monsters.selectors';
import { Monster } from '../../models/interfaces/monster.interface';

// Selector to get the winner from the monstersExtended state
// Takes the full Redux state and returns the winner property
export const monsterWins = (state: RootState) => {
  return state.monstersExtended.winner;
};

// Selector to get the randomMonster flag from monstersExtended state
// This is likely used to determine if random monster selection is enabled
export const selectRandomMonster = (state: RootState) =>
  state.monstersExtended.selectRandomMonster;

// Create a memoized selector that filters out the currently selected monster
// from the list of all monsters
// Uses createSelector for performance optimization through memoization
export const randomMonsters = createSelector(
  // Input selectors: gets the selected monster and all monsters
  [selectSelectedMonster, state => state.monsters.monsters],
  // Result function: takes the values from input selectors as arguments
  (selectedMonster, monsters): Monster[] => {
    // If no monster is selected, return all monsters
    if (!selectedMonster) return monsters;
    // Otherwise, return all monsters except the currently selected one
    return monsters.filter(
      (monster: Monster) => monster.id !== selectedMonster.id,
    );
  },
);
