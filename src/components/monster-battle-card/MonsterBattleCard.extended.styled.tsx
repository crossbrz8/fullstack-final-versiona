import styled from '@emotion/styled';
import {
  Box,
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized' && prop !== 'column',
})<{ centralized?: boolean; column?: boolean }>(({ centralized, column }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  flexDirection: column ? 'column' : 'row',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  fontFamily: 'Roboto',
  fontStyle: 'regular',
  fontWeight: '400',
  width: '100%',
  textAlign: centralized ? 'center' : 'start',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
}));

export const BattleMonsterName = styled(BattleMonsterTitle)(
  ({ borderColor }) => ({
    fontSize: '22px',
    marginBottom: '11px',
    borderBottom: borderColor ? `1px solid ${borderColor}` : 'none',
    fontFamily: 'Roboto',
    fontStyle: 'regular',
    fontWeight: '400',
  }),
);

export const Image = styled.img(({ width, height }) => ({
  borderRadius: '7px',
  width: width || 'auto',
  height,
  objectFit: 'cover',
  objectPosition: 'center',
}));

export const ContainerForStats = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  fontFamily: 'Roboto',
  fontStyle: 'regular',
  fontWeight: '400',
  textAlign: 'start',
  color: colors.black,
  marginBottom: '11px',
}));

export const BattleMonsterStat = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: 'auto',
  textAlign: 'start',
  color: colors.black,
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  width: '100%',
  marginBottom: '10px',
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
