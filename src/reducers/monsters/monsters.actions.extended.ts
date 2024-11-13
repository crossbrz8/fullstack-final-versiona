import { createAction } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';

// For async battle fetching, use createAsyncThunk
export const fetchBattleWins = MonsterServiceExtended.battle;

// createAction is a Redux Toolkit utility that simplifies creating action creators
// It automatically generates action creators and their corresponding action types

// Creates an action creator for setting a random monster
// Usage: dispatch(setRandomMonster(monsterObject))
// - Takes a Monster type as payload
// - Automatically creates an action type 'monsters/setRandomMonster'
export const setRandomMonster = createAction<Monster>(
  'monsters/setRandomMonster',
);

// Creates an action creator for setting the winner
// Usage: dispatch(setWinner(battleObject))
// - Takes a Battle object or null as payload
// - Automatically creates an action type 'monsters/setWinner'
export const setWinner = createAction<Battle | null>('monsters/setWinner');
