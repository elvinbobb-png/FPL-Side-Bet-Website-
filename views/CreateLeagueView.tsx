
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  onCreate: () => void;
}

const CreateLeagueView: React.FC<Props> = ({ onBack, onCreate }) => {
  const [betType, setBetType] = useState('Gameweek');
  const [buyIn, setBuyIn] = useState(100);

  return (
    <div className="flex flex-col flex-1 bg-[#1c053a] text-white overflow-y-auto">
      <div className="p-6 flex items-center gap-4">
        <button onClick={onBack} className="text-white">
          <i className="fas fa-chevron-left text-xl"></i>
        </button>
        <h2 className="text-lg font-bold">Leagues</h2>
      </div>

      <div className="px-6 flex gap-2 mb-8">
        <button className="flex-1 py-3 text-sm font-bold bg-[#2d1b4d] border-b-4 border-fpl-pink rounded-t-xl">Create League</button>
        <button className="flex-1 py-3 text-sm font-bold opacity-40">Join League</button>
      </div>

      <div className="px-6 space-y-8 pb-32">
        <section>
          <h1 className="text-3xl font-black mb-2">Start a new competition</h1>
          <p className="text-slate-400 text-sm leading-relaxed">Be the commissioner. Define rules, set wagers, and invite friends.</p>
        </section>

        {/* League Name */}
        <section className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase opacity-60 mb-2">League Name</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g., The Sunday Lads" 
                className="w-full bg-[#2d1b4d] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-fpl-pink"
              />
              <i className="fas fa-futbol absolute right-4 top-1/2 -translate-y-1/2 opacity-40"></i>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase opacity-60">External Data Source</label>
              <span className="text-[10px] bg-fpl-pink px-2 py-0.5 rounded font-black uppercase">Official</span>
            </div>
            <div className="bg-[#2d1b4d] p-4 rounded-xl border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 fpl-green text-[#1c053a] rounded-lg flex items-center justify-center">
                    <i className="fas fa-link"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Link Official FPL Team</h4>
                  <p className="text-[10px] text-slate-400">Sync points automatically. <span className="text-fpl-pink">This is separate from your app login.</span></p>
                </div>
              </div>
              <div className="flex gap-2">
                 <input type="text" value="1234567" readOnly className="flex-1 bg-black/20 p-3 rounded-lg border border-white/5 font-mono text-sm" />
                 <button className="fpl-green text-[#1c053a] font-bold px-4 rounded-lg text-xs">VERIFY</button>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs font-bold opacity-60">Auto-sync points each Gameweek</span>
                <div className="w-12 h-6 bg-fpl-green rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bet Builder */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <i className="fas fa-tools text-fpl-pink"></i>
            <h2 className="text-lg font-black uppercase italic tracking-tighter">Admin Bet Builder</h2>
          </div>

          <div className="bg-[#2d1b4d] p-6 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Bet Criteria</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs opacity-60 block mb-2">Wager Type</label>
                <div className="flex bg-black/20 rounded-xl p-1">
                  {['Gameweek', 'Monthly', 'Season'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setBetType(t)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${betType === t ? 'bg-[#4a2b84] shadow-lg' : 'opacity-40'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs opacity-60 block mb-2">Win Condition</label>
                  <select className="w-full bg-black/30 p-3 rounded-lg border border-white/10 text-xs font-bold focus:outline-none">
                    <option>Most Points</option>
                    <option>Head-to-Head</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs opacity-60 block mb-2">Target Period</label>
                  <select className="w-full bg-black/30 p-3 rounded-lg border border-white/10 text-xs font-bold focus:outline-none">
                    <option>Gameweek 20</option>
                    <option>Gameweek 21</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4">
               <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-bold opacity-80">Virtual Buy-in</label>
                    <span className="text-[8px] opacity-40">(Per Person)</span>
                  </div>
                  <span className="text-[10px] text-amber-500 font-bold flex items-center gap-1">
                    <i className="fas fa-shield-alt"></i> Offline Settlement
                  </span>
               </div>
               
               <div className="flex gap-2">
                 {[50, 100, 200, 'Custom'].map(val => (
                   <button 
                    key={val}
                    onClick={() => typeof val === 'number' && setBuyIn(val)}
                    className={`flex-1 py-3 rounded-xl border font-bold text-xs transition-all ${buyIn === val ? 'bg-fpl-pink/20 border-fpl-pink text-fpl-pink' : 'border-white/10 opacity-60'}`}
                   >
                     {typeof val === 'number' ? `TT$${val}` : val}
                   </button>
                 ))}
               </div>
               <div className="flex justify-between items-center bg-black/20 p-5 rounded-2xl">
                 <div className="text-2xl font-black">TT$ {buyIn}</div>
                 <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Virtual TTD</div>
               </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Entry Timing</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] opacity-40 block mb-1 uppercase font-bold"><i className="fas fa-calendar-alt mr-1"></i> Start Time</label>
                    <input type="text" value="08/11/2023, 12:00" readOnly className="w-full bg-black/30 p-3 rounded-lg border border-white/10 text-[10px] font-mono" />
                  </div>
                  <div>
                    <label className="text-[10px] opacity-40 block mb-1 uppercase font-bold"><i className="fas fa-lock mr-1"></i> Lock Time</label>
                    <input type="text" value="08/14/2023, 06:30" readOnly className="w-full bg-black/30 p-3 rounded-lg border border-white/10 text-[10px] font-mono" />
                  </div>
                </div>
                <div className="flex justify-between items-center bg-black/20 p-3 rounded-xl border border-emerald-500/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-fpl-pink animate-ping"></div>
                    <span className="text-[10px] font-bold uppercase opacity-60">Countdown Preview</span>
                  </div>
                  <div className="flex gap-2 font-mono font-bold text-fpl-green">
                    <span>02</span>:<span>14</span>:<span>35</span>
                  </div>
                </div>
            </div>

            <div className="pt-6 border-t-2 border-dashed border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-fpl-green">
                    <i className="fas fa-trophy"></i>
                    <h3 className="font-black text-lg">Pot Projection</h3>
                  </div>
                  <span className="text-[8px] bg-white/10 px-2 py-1 rounded-full uppercase font-bold opacity-60">Based on 10 entries</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black italic">TT$1,000.00</span>
                  <span className="text-[10px] font-bold opacity-40">Total Virtual Pot</span>
                </div>
                <div className="space-y-3 pt-2">
                   {[
                     {rank: 1, amount: 600, color: 'bg-emerald-400'},
                     {rank: 2, amount: 300, color: 'bg-slate-400'},
                     {rank: 3, amount: 100, color: 'bg-fpl-pink'}
                   ].map(p => (
                     <div key={p.rank} className="flex items-center gap-3">
                       <div className={`w-5 h-5 rounded-full ${p.color} text-[#1c053a] text-[10px] flex items-center justify-center font-bold`}>{p.rank}</div>
                       <div className="flex-1 h-2 bg-black/30 rounded-full overflow-hidden">
                         <div className={`h-full ${p.color}`} style={{ width: `${(p.amount/1000)*100}%` }}></div>
                       </div>
                       <div className="text-[10px] font-bold w-12 text-right">TT${p.amount}</div>
                     </div>
                   ))}
                </div>
                <p className="text-[9px] opacity-40 italic text-center pt-2">*Payouts are suggestions for the commissioner to distribute externally.</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-3">
          <i className="fas fa-exclamation-triangle text-amber-500 mt-1"></i>
          <p className="text-[10px] leading-relaxed">
            <span className="font-bold block mb-1">Financial Disclaimer:</span>
            This app handles scoring only. The administrator is solely responsible for collecting and distributing all external funds. No real money is processed here.
          </p>
        </div>

        <button 
          onClick={onCreate}
          className="w-full bg-fpl-pink text-white font-black py-5 rounded-2xl shadow-[0_10px_40px_rgba(255,0,85,0.3)] hover:translate-y-[-2px] transition-all"
        >
          Create League
        </button>

        <p className="text-[10px] text-center opacity-40 pb-12">
          By creating a league, you agree to the <span className="underline">Terms of Service</span>.
        </p>
      </div>
    </div>
  );
};

export default CreateLeagueView;
