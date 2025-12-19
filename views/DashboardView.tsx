
import React from 'react';
import { View, League } from '../types';

interface Props {
  league: League;
  onNavigate: (view: View) => void;
}

const DashboardView: React.FC<Props> = ({ league, onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 bg-[#1c053a] text-white">
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <button className="text-white hover:opacity-70">
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 className="text-lg font-bold">{league.name}</h2>
        <button className="text-white hover:opacity-70">
          <i className="fas fa-info-circle text-xl"></i>
        </button>
      </div>

      <div className="px-6 flex-1 overflow-y-auto pb-24">
        {/* Banner Alert */}
        <div className="bg-[#2d1b4d] border border-[#4a2b84] p-4 rounded-xl flex gap-3 mb-6">
          <i className="fas fa-info-circle text-emerald-400 mt-1"></i>
          <p className="text-xs text-slate-300 leading-relaxed">
            For reference only. All wagers are virtual. Monetary settlements occur outside this app.
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#2d1b4d] p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-fpl-green">
              <i className="fas fa-piggy-bank"></i>
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Virtual Pot</span>
            </div>
            <div className="text-2xl font-black">TT${league.activeBet.pot * 2}</div>
          </div>
          <div className="bg-[#2d1b4d] p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-pink-500">
              <i className="fas fa-receipt"></i>
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Virtual Wager</span>
            </div>
            <div className="text-2xl font-black">TT${league.activeBet.buyIn * 2}</div>
          </div>
        </div>

        {/* FPL App Link */}
        <button className="w-full bg-[#2d1b4d] border border-white/5 py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm mb-6">
          Manage Team on Official FPL App <i className="fas fa-external-link-alt text-xs opacity-60"></i>
        </button>

        {/* Live Status Card */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <h3 className="font-bold">Gameweek 12 Live</h3>
            </div>
            <span className="bg-emerald-400/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded uppercase">In Progress</span>
          </div>
          
          <div className="flex justify-between text-sm mb-2 font-medium">
            <span className="opacity-60">7/10 Matches Played</span>
            <span>70%</span>
          </div>
          <div className="w-full h-2 bg-black/30 rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <span className="text-[10px] opacity-40 italic">Last update: 2 mins ago</span>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#2d1b4d] rounded-xl p-1 mb-6">
          <button className="flex-1 py-2 text-xs font-bold bg-[#4a2b84] rounded-lg">Total Season</button>
          <button className="flex-1 py-2 text-xs font-bold opacity-40">Current GW</button>
        </div>

        {/* Leaderboard */}
        <div className="space-y-3">
          {league.players.map((player) => (
            <div 
              key={player.id} 
              className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${player.rank === 1 ? 'bg-gradient-to-r from-yellow-500/10 via-amber-500/20 to-transparent border border-amber-500/20 shadow-lg shadow-amber-500/5' : 'bg-white/5'}`}
            >
              <div className="w-6 text-center font-bold opacity-40">{player.rank}</div>
              <div className="relative">
                <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
                {player.rank === 1 && (
                   <div className="absolute -top-1 -right-1 bg-amber-400 text-[#1c053a] text-[8px] font-black px-1 rounded shadow-md">TOP</div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm truncate">{player.name}</h4>
                <p className="text-[10px] opacity-40 truncate">{player.handle}</p>
              </div>
              <div className="text-right">
                <div className={`font-black text-lg ${player.rank === 1 ? 'text-emerald-400' : 'text-white'}`}>{player.points}</div>
                <div className="text-[10px] opacity-40 uppercase font-bold tracking-tighter">Total Pts</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1c053a] to-transparent">
        <button 
          onClick={() => onNavigate(View.RESULTS)}
          className="w-full bg-[#00ff88] text-[#1c053a] font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,255,136,0.3)] hover:scale-[1.02] transition-transform"
        >
          <i className="fas fa-eye"></i>
          VIEW MY TEAM
        </button>
      </div>

      {/* Navigation for Dev Purpose */}
      <div className="absolute top-4 right-4 flex gap-2">
         <button onClick={() => onNavigate(View.CREATE_LEAGUE)} className="bg-white/10 p-2 rounded-full text-xs">New Bet</button>
         <button onClick={() => onNavigate(View.WAGER_INVITE)} className="bg-white/10 p-2 rounded-full text-xs">Invite</button>
      </div>
    </div>
  );
};

export default DashboardView;
