
import React from 'react';

interface Props {
  onLogin: () => void;
}

const LoginView: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex flex-col flex-1 p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-pink-50 text-slate-900">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 fpl-dark-purple rounded-full flex items-center justify-center text-white">
            <i className="fas fa-crown"></i>
          </div>
          <div>
            <h1 className="text-xs font-bold uppercase tracking-widest leading-none">Premier</h1>
            <h1 className="text-xs font-bold uppercase tracking-widest leading-none text-slate-400">League</h1>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      <h2 className="text-4xl font-extrabold mb-8 leading-tight tracking-tight">
        Sign in to FPL<br />Side Bet
      </h2>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-600">Email address</label>
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-600">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <i className="fas fa-eye-slash"></i>
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={onLogin}
        className="w-full fpl-dark-purple text-white font-bold py-4 rounded-full shadow-lg hover:opacity-90 transition-all mb-8"
      >
        Sign in
      </button>

      <div className="relative flex items-center justify-center mb-8">
        <div className="border-t border-slate-200 w-full"></div>
        <span className="bg-transparent px-4 text-slate-400 text-sm absolute">or</span>
      </div>

      <div className="space-y-3 mb-10">
        <SocialButton icon="fa-google" text="Sign in with Google" />
        <SocialButton icon="fa-facebook" iconColor="text-blue-600" text="Sign in with Facebook" />
        <SocialButton icon="fa-apple" text="Sign in with Apple" />
        <SocialButton icon="fa-x-twitter" text="Sign in with X" />
      </div>

      <div className="text-center space-y-4">
        <p className="text-slate-500">No account? <button className="font-bold text-slate-900">Join now</button></p>
        <button className="text-slate-400 text-sm">Reset password</button>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, text, iconColor = 'text-slate-600' }: { icon: string, text: string, iconColor?: string }) => (
  <button className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-full hover:bg-white/50 transition-all text-sm font-semibold">
    <i className={`fab ${icon} ${iconColor} text-lg`}></i>
    {text}
  </button>
);

export default LoginView;
