
import React from 'react';

interface Props {
  onBack: () => void;
}

const ResultsView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col flex-1 bg-[#1c053a] text-white">
      <div className="p-6 flex justify-between items-center">
        <button onClick={onBack} className="text-white hover:opacity-70">
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 className="text-lg font-bold">Gameweek Results</h2>
        <button className="text-white hover:opacity-70">
          <i className="fas fa-share-alt text-xl"></i>
        </button>
      </div>

      <div className="px-6 flex-1 overflow-y-auto pb-24 text-center">
         <span className="text-[10px] font-black text-fpl-green uppercase tracking-[0.3em] mb-4 block">Fantasy Premier League</span>
         <h1 className="text-4xl font-black mb-12">Gameweek 23 Winner</h1>

         <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-fpl-green opacity-20 blur-3xl rounded-full scale-150 animate-pulse"></div>
            <div className="relative">
                {/* Trophy Head */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 text-fpl-green text-2xl drop-shadow-[0_0_10px_rgba(0,255,136,1)]">
                   <i className="fas fa-trophy"></i>
                </div>
                {/* Winner Ring */}
                <div className="w-48 h-48 rounded-full p-2 border-4 border-fpl-green shadow-[0_0_40px_rgba(0,255,136,0.2)]">
                   <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                      <img src="https://picsum.photos/seed/winner/300" alt="Winner" className="w-full h-full object-cover" />
                   </div>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-fpl-green text-[#1c053a] px-6 py-2 rounded-full font-black text-xs shadow-xl flex items-center gap-2 whitespace-nowrap">
                   <i className="fas fa-crown"></i>
                   GW WINNER
                </div>
            </div>
         </div>

         <div className="mb-12">
            <h2 className="text-4xl font-black mb-2 italic tracking-tighter">Salah-lujah FC</h2>
            <p className="text-slate-400 font-bold">Manager: James Smith</p>
         </div>

         <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-6 mb-16 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/10 px-3 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest opacity-60">FPL Final Score</div>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-fpl-green text-xl">
               <i className="fas fa-calendar-check"></i>
            </div>
            <div className="flex items-baseline gap-2">
               <span className="text-6xl font-black italic tracking-tighter">104</span>
               <span className="text-xl font-bold opacity-40 uppercase tracking-widest">Pts</span>
            </div>
         </div>

         {/* Pot Summary */}
         <div className="bg-gradient-to-r from-[#2d1b4d] to-[#1c053a] rounded-3xl p-8 border border-white/10 text-left mb-12 relative overflow-hidden">
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full flex items-center justify-center text-5xl opacity-20">
               <i className="fas fa-money-bill-wave"></i>
            </div>
            
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2 block">Estimated Virtual Pot</span>
            <div className="text-5xl font-black italic mb-6">TT$ 120.00</div>
            
            <div className="flex items-center gap-2 text-fpl-pink mb-4">
               <div className="w-2 h-2 rounded-full bg-fpl-pink"></div>
               <span className="text-[10px] font-black uppercase tracking-widest">Settled Externally</span>
            </div>
            
            <p className="text-[10px] leading-relaxed opacity-60">
              <span className="font-bold text-white">Disclaimer:</span> The wager amount shown is virtual. All actual prize distributions and payments are managed externally by group members outside of this app.
            </p>
         </div>

         {/* Runners Up */}
         <div className="text-left space-y-4 mb-12">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xs font-black uppercase tracking-widest opacity-40">Runners Up</h3>
               <button className="text-xs font-black text-fpl-green uppercase tracking-widest">View All</button>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
               <div className="relative">
                 <img src="https://picsum.photos/seed/sarah/100" alt="Runner" className="w-12 h-12 rounded-full" />
                 <div className="absolute -bottom-1 -right-1 bg-fpl-pink text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1c053a]">2</div>
               </div>
               <div className="flex-1">
                 <h4 className="font-bold text-sm">Klopp's Kids</h4>
                 <p className="text-[10px] opacity-40">Sarah Jenkins</p>
               </div>
               <div className="text-right">
                 <div className="text-lg font-black">98 <span className="text-[10px] opacity-40 uppercase">pts</span></div>
               </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 opacity-80">
               <div className="relative">
                 <img src="https://picsum.photos/seed/mike/100" alt="Runner" className="w-12 h-12 rounded-full" />
                 <div className="absolute -bottom-1 -right-1 bg-amber-400 text-[#1c053a] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1c053a]">3</div>
               </div>
               <div className="flex-1">
                 <h4 className="font-bold text-sm">No Kane No Gain</h4>
                 <p className="text-[10px] opacity-40">Mike Ross</p>
               </div>
               <div className="text-right">
                 <div className="text-lg font-black">92 <span className="text-[10px] opacity-40 uppercase">pts</span></div>
               </div>
            </div>
         </div>
      </div>

      <div className="p-6 bg-[#0f172a]/80 backdrop-blur-xl">
         <button 
           onClick={onBack}
           className="w-full bg-fpl-green text-[#1c053a] font-black py-5 rounded-2xl shadow-[0_8px_30px_rgba(0,255,136,0.3)] hover:translate-y-[-2px] transition-all"
         >
           VIEW FULL LEAGUE TABLE
         </button>
      </div>
    </div>
  );
};

export default ResultsView;
