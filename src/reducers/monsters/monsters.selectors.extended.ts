import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Returns the winner from the monstersExtended state slice
export const monsterWins = (state: RootState) => {
  return state.monstersExtended.winner;
};

// Basic selectors to get pieces of state
const selectMonstersState = (state: RootState) => state.monsters;
const selectSelectedMonsterId = (state: RootState) =>
  state.monsters.selectedMonster?.id;

// Creates a memoized selector that returns a random monster, excluding the currently selected one
export const selectRandomMonster = createSelector(
  // Input selectors that this selector depends on
  [selectMonstersState, selectSelectedMonsterId],
  (monstersState, selectedId) => {
    // If no monster is selected, return null
    if (!selectedId) {
      return null;
    }
    console.log('selectedId', selectedId); // id of the selected monster
    console.log('monstersState', monstersState); // all monsters in the state
    const monsters = monstersState.monsters;
    // Filter out the currently selected monster from the available choices
    const availableMonsters = monsters.filter(
      monster => monster.id !== selectedId,
    );
    // Generate a random index within the available monsters array
    const randomIndex = Math.floor(Math.random() * availableMonsters.length);
    // Return the randomly selected monster or null if none are available
    return availableMonsters[randomIndex] || null;
  },
);
