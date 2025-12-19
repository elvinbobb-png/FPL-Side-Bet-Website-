
import React, { useState } from 'react';
import { View, League } from './types';
import { INITIAL_LEAGUE } from './constants';
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import CreateLeagueView from './views/CreateLeagueView';
import WagerInviteView from './views/WagerInviteView';
import ResultsView from './views/ResultsView';
import ConfirmationView from './views/ConfirmationView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LOGIN);
  const [league, setLeague] = useState<League>(INITIAL_LEAGUE);

  const navigateTo = (view: View) => setCurrentView(view);

  // Simple Router Switch
  const renderView = () => {
    switch (currentView) {
      case View.LOGIN:
        return <LoginView onLogin={() => navigateTo(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return (
          <DashboardView 
            league={league} 
            onNavigate={navigateTo} 
          />
        );
      case View.CREATE_LEAGUE:
        return (
          <CreateLeagueView 
            onBack={() => navigateTo(View.DASHBOARD)} 
            onCreate={() => navigateTo(View.CONFIRMATION)}
          />
        );
      case View.WAGER_INVITE:
        return (
          <WagerInviteView 
            league={league} 
            onAccept={() => navigateTo(View.DASHBOARD)} 
            onDecline={() => navigateTo(View.DASHBOARD)}
          />
        );
      case View.RESULTS:
        return (
          <ResultsView 
            onBack={() => navigateTo(View.DASHBOARD)} 
          />
        );
      case View.CONFIRMATION:
        return (
          <ConfirmationView 
            onBack={() => navigateTo(View.DASHBOARD)} 
          />
        );
      default:
        return <LoginView onLogin={() => navigateTo(View.DASHBOARD)} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen fpl-gradient-bg">
      <div className="w-full max-w-md relative bg-slate-900 shadow-2xl overflow-hidden min-h-screen flex flex-col">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
