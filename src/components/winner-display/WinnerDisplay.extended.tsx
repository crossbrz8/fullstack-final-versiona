import React from 'react';
import { WinnerDisplayContainer, WinnerText } from './WinnerDisplay.styled';

type Props = {
  text: string;
};

const WinnerDisplay: React.FC<Props> = ({ text }) => (
  <WinnerDisplayContainer data-testid="winner-display">
    <WinnerText>{text} wins!</WinnerText>
  </WinnerDisplayContainer>
);

export { WinnerDisplay };
