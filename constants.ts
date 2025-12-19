
import { Player, Bet, League } from './types';

export const COLORS = {
  primary: '#1c053a',
  secondary: '#ff0055',
  success: '#00ff88',
  cardBg: 'rgba(30, 27, 75, 0.8)',
  textMuted: '#94a3b8'
};

export const MOCK_PLAYERS: Player[] = [
  { id: '1', name: 'Klopps and Robbers', handle: '@alex_manager', points: 842, avatar: 'https://picsum.photos/seed/alex/100', rank: 1 },
  { id: '2', name: 'Salah bout that', handle: '@sarah_fpl', points: 815, avatar: 'https://picsum.photos/seed/sarah/100', rank: 2 },
  { id: '3', name: 'No Kane No Gain', handle: '@mike_ross', points: 798, avatar: 'https://picsum.photos/seed/mike/100', rank: 3 },
  { id: '4', name: 'Show Me The Mane', handle: '@jenny_l', points: 750, avatar: 'https://picsum.photos/seed/jenny/100', rank: 4 },
  { id: '5', name: 'Expected Toulouse', handle: '@david_b', points: 712, avatar: 'https://picsum.photos/seed/david/100', rank: 5 },
  { id: '6', name: 'Tea & Busquets', handle: '@tom_r', points: 698, avatar: 'https://picsum.photos/seed/tom/100', rank: 6 },
];

export const INITIAL_LEAGUE: League = {
  id: 'L1',
  name: 'Office Legends 23/24',
  admin: '@commissionerdave',
  fplTeamId: '1234567',
  activeBet: {
    id: 'B1',
    type: 'Gameweek',
    target: 'Gameweek 20',
    condition: 'Most Points (FPL Scoring)',
    buyIn: 25,
    currency: 'TTD',
    pot: 250,
    status: 'active'
  },
  players: MOCK_PLAYERS
};
