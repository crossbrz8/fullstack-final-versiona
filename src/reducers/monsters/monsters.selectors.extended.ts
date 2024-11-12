import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const monsterWins = (state: RootState) => {
  return state.monstersExtended.winner;
};

const selectMonstersState = (state: RootState) => state.monsters;
const selectSelectedMonsterId = (state: RootState) =>
  state.monsters.selectedMonster?.id;

export const selectRandomMonster = createSelector(
  [selectMonstersState, selectSelectedMonsterId],
  (monstersState, selectedId) => {
    if (!selectedId) {
      return null;
    }
    const monsters = monstersState.monsters;
    const availableMonsters = monsters.filter(
      monster => monster.id !== selectedId,
    );
    const randomIndex = Math.floor(Math.random() * availableMonsters.length);
    return availableMonsters[randomIndex] || null;
  },
);
