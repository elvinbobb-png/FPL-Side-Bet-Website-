
import React from 'react';
import { League } from '../types';

interface Props {
  league: League;
  onAccept: () => void;
  onDecline: () => void;
}

const WagerInviteView: React.FC<Props> = ({ league, onAccept, onDecline }) => {
  return (
    <div className="flex flex-col flex-1 bg-[#1c053a] text-white">
      <div className="p-6 flex justify-between items-center">
        <button onClick={onDecline} className="text-white hover:opacity-70">
          <i className="fas fa-times text-2xl opacity-40"></i>
        </button>
        <h2 className="text-lg font-bold">Wager Invite</h2>
        <div className="w-8"></div>
      </div>

      <div className="px-6 flex flex-col items-center flex-1 overflow-y-auto pb-32">
        <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
           <i className="fas fa-envelope-open text-fpl-pink"></i>
           <span className="opacity-60">Invited by</span>
           <span className="text-white">{league.admin}</span>
        </div>

        <h1 className="text-4xl font-black mb-1">{league.name}</h1>
        <p className="text-slate-400 font-bold mb-8">Gameweek 20 Showdown</p>

        {/* Pot Card */}
        <div className="w-full bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 mb-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-fpl-green opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <i className="fas fa-piggy-bank text-fpl-green"></i>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-fpl-green">Live Virtual Pot</span>
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="flex items-baseline gap-2">
               <span className="text-fpl-green text-3xl font-black">TTD</span>
               <span className="text-7xl font-black italic">$150</span>
               <span className="text-2xl font-black opacity-40">.00</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider border-t border-white/10 pt-6">
            <div className="flex items-center gap-1.5">
              <span className="opacity-40">6 Joined</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="opacity-40 text-fpl-pink">+</span>
              <span>TTD $25 / Person</span>
            </div>
            <div className="flex items-center gap-1.5 text-fpl-green">
              <i className="fas fa-infinity text-[8px]"></i>
              <span>Entries Open</span>
            </div>
          </div>

          <div className="mt-6 bg-black/20 rounded-xl p-3 text-center">
            <p className="text-[10px] font-bold">Potential Payout: <span className="text-white">TTD $150+</span> <span className="opacity-40 font-normal">(Growing)</span></p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="w-full space-y-4 mb-8">
          <div className="flex items-center gap-2 mb-4">
             <i className="fas fa-receipt opacity-40"></i>
             <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">Wager Details</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <DetailItem icon="fa-mountain" label="Type" value="Gameweek Wager" />
            <DetailItem icon="fa-calendar-alt" label="Target" value="Gameweek 20" />
            <DetailItem icon="fa-trophy" label="Objective" value="Most FPL Points" />
            <DetailItem icon="fa-dollar-sign" label="Buy-in" value="TTD $25.00" valueColor="text-fpl-pink" />
          </div>
        </div>

        {/* Deadline */}
        <div className="w-full bg-[#2d1b4d] rounded-2xl p-6 border border-white/5 flex justify-between items-center mb-8">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Entry Deadline</h4>
            <p className="text-sm font-bold">Sat, 11 Aug • 11:00 AM</p>
          </div>
          <div className="text-right">
             <div className="flex items-center justify-end gap-1 mb-1">
               <div className="w-1.5 h-1.5 rounded-full bg-fpl-pink animate-pulse"></div>
               <span className="text-[8px] font-black text-fpl-pink uppercase tracking-widest">Closing Soon</span>
             </div>
             <div className="flex gap-2 font-mono font-bold text-lg">
                <span>02</span>:<span>14</span>:<span>35</span>
             </div>
          </div>
        </div>

        {/* Participants */}
        <div className="w-full space-y-4 mb-8">
           <div className="flex items-center gap-2">
             <i className="fas fa-users opacity-40"></i>
             <h3 className="text-xs font-black uppercase tracking-widest opacity-40">Who's In (6)</h3>
           </div>
           <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-center justify-between">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-200 border-2 border-[#1c053a]"></div>
                <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-[#1c053a]"></div>
                <div className="w-10 h-10 rounded-full bg-emerald-200 border-2 border-[#1c053a]"></div>
                <div className="w-10 h-10 rounded-full bg-blue-300 border-2 border-[#1c053a] flex items-center justify-center text-xs font-black text-[#1c053a]">+2</div>
              </div>
              <p className="text-[10px] font-bold opacity-60 flex-1 ml-4 leading-relaxed">
                Includes <span className="text-white">Dave, Sarah</span>, and 4 others.
              </p>
           </div>
        </div>

        <div className="bg-amber-400 p-4 rounded-xl flex gap-3 text-[#1c053a] mb-12">
           <i className="fas fa-info-circle mt-1"></i>
           <p className="text-[10px] font-bold leading-tight">
             Offline Settlement: The commissioner (@CommissionerDave) is responsible for collecting the TTD $25 buy-in.
           </p>
        </div>
      </div>

      {/* Persistent CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#0f172a] border-t border-white/5 flex gap-4">
        <button onClick={onDecline} className="flex-1 py-5 rounded-2xl bg-white/5 border border-white/10 font-black text-sm hover:bg-white/10">Decline</button>
        <button 
          onClick={onAccept}
          className="flex-2 flex-[2.5] py-5 rounded-2xl bg-fpl-pink font-black text-sm flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,0,85,0.4)]"
        >
          Join Wager <span className="bg-black/20 px-3 py-1 rounded-lg text-[10px]">TTD $25</span>
        </button>
      </div>
    </div>
  );
};

const DetailItem = ({ icon, label, value, valueColor = 'text-white' }: { icon: string, label: string, value: string, valueColor?: string }) => (
  <div className="bg-[#2d1b4d] p-5 rounded-2xl border border-white/5 space-y-1">
    <i className={`fas ${icon} opacity-40 text-xs`}></i>
    <h4 className="text-[9px] font-bold uppercase tracking-widest opacity-40">{label}</h4>
    <p className={`text-xs font-black italic tracking-tighter ${valueColor}`}>{value}</p>
  </div>
);

export default WagerInviteView;
