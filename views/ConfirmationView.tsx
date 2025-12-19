
import React from 'react';

interface Props {
  onBack: () => void;
}

const ConfirmationView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col flex-1 bg-[#1c053a] text-white p-8">
      <div className="flex justify-between items-center mb-16">
        <button onClick={onBack} className="text-white">
          <i className="fas fa-times text-2xl opacity-40"></i>
        </button>
        <h2 className="text-lg font-bold">Confirmation</h2>
        <div className="w-8"></div>
      </div>

      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-[#1c053a] text-3xl shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            <i className="fas fa-check"></i>
          </div>
        </div>
        <h1 className="text-4xl font-black mb-4">Side Bet Live!</h1>
        <p className="text-slate-400 text-sm max-w-[280px] leading-relaxed">
          Your "Gameweek 20 Challenge" has been successfully created and is ready for entrants.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {/* Wager Summary */}
        <div className="bg-[#2d1b4d] rounded-2xl p-6 border border-white/10 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">Wager Summary</h3>
            <span className="bg-emerald-500 text-[#1c053a] text-[10px] font-black px-2 py-1 rounded uppercase">Active</span>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="space-y-1">
              <span className="text-[10px] opacity-40 uppercase font-bold">Wager Type</span>
              <div className="flex items-center gap-2 font-bold">
                 <i className="fas fa-chart-bar text-fpl-pink"></i>
                 <span>Gameweek</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] opacity-40 uppercase font-bold">Target Period</span>
              <div className="flex items-center gap-2 font-bold">
                 <i className="fas fa-calendar-day text-fpl-pink"></i>
                 <span>Gameweek 20</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <span className="text-[10px] opacity-40 uppercase font-bold">Win Condition</span>
            <div className="flex items-center gap-2 font-bold mt-1">
               <i className="fas fa-trophy text-fpl-pink"></i>
               <span>Most Points (FPL Scoring)</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2d1b4d] p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[9px] font-bold opacity-40 uppercase">Virtual Buy-in</span>
            <div className="text-2xl font-black">TTD $25</div>
            <span className="text-[8px] font-bold opacity-40 uppercase block">Per Person</span>
            <div className="pt-2">
              <span className="text-[8px] bg-amber-500/20 text-amber-500 px-2 py-1 rounded-full font-bold uppercase">Offline Settle</span>
            </div>
          </div>
          <div className="bg-[#2d1b4d] p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[9px] font-bold opacity-40 uppercase">Entry Lock</span>
            <div className="text-2xl font-black">Aug 14</div>
            <span className="text-[8px] font-bold opacity-40 uppercase block">18:30 GMT</span>
            <div className="pt-2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[8px] font-bold text-emerald-500 uppercase">Open Now</span>
            </div>
          </div>
        </div>

        {/* Invite Players */}
        <div className="bg-[#2d1b4d] rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
             <i className="fas fa-user-plus text-fpl-pink text-xl"></i>
             <h3 className="font-black text-sm">Invite Players</h3>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-black/30 border border-white/10 rounded-xl p-4 flex justify-between items-center">
              <div className="font-mono text-xs font-bold opacity-60">CODE: <span className="text-white">GW20-LADS-9X</span></div>
              <i className="fas fa-copy opacity-40"></i>
            </div>
            <button className="bg-white text-[#1c053a] font-black px-6 rounded-xl text-sm">Share</button>
          </div>
          <p className="text-[10px] opacity-40 mt-3 text-center">Share this code or link with your league members.</p>
        </div>

        {/* Projected Pot */}
        <div className="bg-gradient-to-br from-[#2d1b4d] to-[#1c053a] rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-fpl-green">
              <i className="fas fa-trophy"></i>
              <h3 className="font-bold text-sm">Projected Pot</h3>
            </div>
            <span className="text-[8px] bg-white/10 px-2 py-1 rounded-full font-black opacity-40 uppercase">Open Entry</span>
          </div>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl font-black italic">TTD $250.00</span>
            <span className="text-[10px] font-bold opacity-40">Total Virtual Pot</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#1c053a] bg-amber-400"></div>
              <div className="w-8 h-8 rounded-full border-2 border-[#1c053a] bg-pink-400"></div>
              <div className="w-8 h-8 rounded-full border-2 border-[#1c053a] bg-emerald-400 flex items-center justify-center text-[10px] font-black text-[#1c053a]">+1</div>
            </div>
            <div className="text-[10px] font-bold text-fpl-green">You + 2 others joined</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <button onClick={onBack} className="flex-1 py-5 rounded-2xl bg-white/10 border border-white/10 font-black text-sm hover:bg-white/20">View Dashboard</button>
        <button className="flex-2 flex-[1.5] py-5 rounded-2xl bg-fpl-pink font-black text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,0,85,0.3)]">
          <i className="fas fa-share-alt"></i> Invite Friends
        </button>
      </div>
    </div>
  );
};

export default ConfirmationView;
