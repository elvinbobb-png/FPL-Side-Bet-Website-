
export enum View {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  CREATE_LEAGUE = 'CREATE_LEAGUE',
  WAGER_INVITE = 'WAGER_INVITE',
  RESULTS = 'RESULTS',
  CONFIRMATION = 'CONFIRMATION'
}

export interface Player {
  id: string;
  name: string;
  handle: string;
  points: number;
  avatar: string;
  rank?: number;
}

export interface Bet {
  id: string;
  type: 'Gameweek' | 'Monthly' | 'Season';
  target: string;
  condition: string;
  buyIn: number;
  currency: string;
  pot: number;
  status: 'active' | 'pending' | 'completed';
}

export interface League {
  id: string;
  name: string;
  admin: string;
  fplTeamId: string;
  activeBet: Bet;
  players: Player[];
}
