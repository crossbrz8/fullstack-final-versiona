import styled from '@emotion/styled';
import {
  Box,
  Card,
  Divider,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  flexDirection: 'column',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'regular',
  fontWeight: '400',
  width: '100%',
  textAlign: 'center',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
}));

export const Image = styled.img(({ width, height }) => ({
  borderRadius: '7px',
  width,
  height,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
}));

export const BattleMonsterName = styled(Typography)(() => ({
  fontSize: '22px',
  fontFamily: 'Roboto',
  fontStyle: 'regular',
  fontWeight: '400',
  marginTop: '14px',
}));

export const DividerBattle = styled(Divider)(() => ({
  width: '100%',
  height: '1px',
  backgroundColor: colors.lightGray,
}));

export const MonsterCardTitle = styled(Typography)(() => ({
  fontSize: '22px',
  lineHeight: '25.78px',
  textAlign: 'start',
  color: colors.black,
}));

export const ContainerForStats = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  color: colors.black,
  marginTop: '11px',
  marginBottom: '11px',
}));

export const BattleMonsterStat = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14.06px',
  textAlign: 'start',
  color: colors.black,
  marginBottom: '5px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  width: '100%',
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));
