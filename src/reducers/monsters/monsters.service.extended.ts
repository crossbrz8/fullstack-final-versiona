import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/env';
import { Battle } from '../../models/interfaces/battle.interface';

export const battleMonsters = createAsyncThunk(
  'monsters/battle',
  async ({
    monster1Id,
    monster2Id,
  }: {
    monster1Id: string;
    monster2Id: string;
  }) => {
    if (!monster1Id || !monster2Id) {
      throw new Error('Both monster IDs are required');
    }

    const response = await fetch(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ monster1Id, monster2Id }),
    });

    const data = await response.json();
    return data as Battle;
  },
);

// Original service can be kept if needed for other purposes
export const MonsterServiceExtended = {
  battle: battleMonsters,
};
