import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterName,
  BattleMonsterStat,
  BattleMonsterTitle,
  ContainerForStats,
  Image,
  ProgressBar,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  if (!monster) {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle centralized>
          {title || 'No Monster Selected'}
        </BattleMonsterTitle>
      </BattleMonsterCard>
    );
  }
  return (
    <BattleMonsterCard centralized column>
      <Image src={monster?.imageUrl} height={178} />
      <BattleMonsterName borderColor="rgba(0, 0, 0, 0.1)">
        {title!}
      </BattleMonsterName>
      <ContainerForStats>
        <BattleMonsterStat>HP</BattleMonsterStat>
        <ProgressBar variant="determinate" value={(monster?.hp / 100) * 100} />
      </ContainerForStats>
      <ContainerForStats>
        <BattleMonsterStat>Attack</BattleMonsterStat>
        <ProgressBar
          variant="determinate"
          value={(monster?.attack / 100) * 100}
        />
      </ContainerForStats>
      <ContainerForStats>
        <BattleMonsterStat>Defense</BattleMonsterStat>
        <ProgressBar
          variant="determinate"
          value={(monster?.defense / 100) * 100}
        />
      </ContainerForStats>
      <ContainerForStats>
        <BattleMonsterStat>Speed</BattleMonsterStat>
        <ProgressBar
          variant="determinate"
          value={(monster?.speed / 100) * 100}
        />
      </ContainerForStats>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
