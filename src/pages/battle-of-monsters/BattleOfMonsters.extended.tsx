import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  monsterWins,
  selectRandomMonster,
} from '../../reducers/monsters/monsters.selectors.extended';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import { fetchBattleWins } from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';
import { setWinner } from '../../reducers/monsters/monsters.actions.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectRandomMonster);
  const winner = useSelector(monsterWins);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  useEffect(() => {
    dispatch(setWinner(null));
  }, [selectedMonster, dispatch]);

  const handleStartBattleClick = () => {
    // Only proceed if both monsters are selected
    if (selectedMonster && computerMonster) {
      // Dispatch the battle action with both monster IDs
      dispatch(
        fetchBattleWins({
          monster1Id: selectedMonster.id,
          monster2Id: computerMonster.id,
        }),
      );
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>
      <MonstersList monsters={monsters} />
      {winner && <WinnerDisplay text={winner?.winner?.name} />}
      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}
        />
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={computerMonster?.name || 'Computer'}
          monster={computerMonster}
        />
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
