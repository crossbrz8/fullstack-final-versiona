import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MonsterBattleCard } from './MonsterBattleCard.extended';
import { Monster } from '../../models/interfaces/monster.interface';
import React from 'react';

describe('MonsterBattleCard', () => {
  const mockMonster: Monster = {
    id: '1',
    name: 'Mock Monster',
    hp: 50,
    attack: 75,
    defense: 60,
    speed: 80,
    imageUrl: 'mock-image-url.jpg',
    type: 'Fire',
  };

  it('renders "No Monster Selected" when no monster is provided', () => {
    render(<MonsterBattleCard />);
    expect(screen.getByText('No Monster Selected')).toBeInTheDocument();
  });

  it('renders custom title when provided without monster', () => {
    render(<MonsterBattleCard title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders monster card with all stats when monster is provided', () => {
    render(<MonsterBattleCard monster={mockMonster} title="Monster Card" />);

    // Check if title is rendered
    expect(screen.getByText('Monster Card')).toBeInTheDocument();

    // Check if all stats are rendered
    expect(screen.getByText('HP')).toBeInTheDocument();
    expect(screen.getByText('Attack')).toBeInTheDocument();
    expect(screen.getByText('Defense')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();

    // Check if image is rendered with correct props
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('mock-image-url.jpg');
    expect(image.height).toBe(178);
  });
});
