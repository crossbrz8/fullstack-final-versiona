import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';

export const battleMonsters = createAsyncThunk(
  'monsters/battle',
  async ({ monster1Id, monster2Id }: Players) => {
    const response = await fetch(`${API_URL}/battle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ monster1Id, monster2Id }),
    });

    return (await response.json()) as Battle;
  },
);

export const MonsterServiceExtended = { battle: battleMonsters };
