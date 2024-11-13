import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterName,
  BattleMonsterStat,
  BattleMonsterTitle,
  ContainerForStats,
  DividerBattle,
  Image,
  ProgressBar,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  // If no monster is provided, render a placeholder card
  if (!monster) {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle>
          {title || 'No Monster Selected'}
        </BattleMonsterTitle>
      </BattleMonsterCard>
    );
  }
  return (
    <BattleMonsterCard>
      <Image src={monster.imageUrl} width={283} height={178} />
      <BattleMonsterName>{title}</BattleMonsterName>
      <DividerBattle />
      <ContainerForStats>
        <BattleMonsterStat>HP</BattleMonsterStat>
        <ProgressBar variant="determinate" value={monster.hp} />
      </ContainerForStats>
      <ContainerForStats>
        <BattleMonsterStat>Attack</BattleMonsterStat>
        <ProgressBar variant="determinate" value={monster.attack} />
      </ContainerForStats>
      <ContainerForStats>
        <BattleMonsterStat>Defense</BattleMonsterStat>
        <ProgressBar variant="determinate" value={monster.defense} />
      </ContainerForStats>
      <ContainerForStats>
        <BattleMonsterStat>Speed</BattleMonsterStat>
        <ProgressBar variant="determinate" value={monster.speed} />
      </ContainerForStats>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
