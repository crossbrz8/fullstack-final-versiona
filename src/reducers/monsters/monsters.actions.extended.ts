import { createAction } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';

// For async battle fetching, use createAsyncThunk
export const fetchBattleWins = MonsterServiceExtended.battle;

// For synchronous actions, use createAction
export const setRandomMonster = createAction<Monster>(
  'monsters/setRandomMonster',
);

export const setWinner = createAction<Battle | null>('monsters/setWinner');
