
import React, { useState } from 'react';
import { Screen } from './types';
import BottomNav from './components/BottomNav';
import DashboardScreen from './screens/DashboardScreen';
import WorkshopsScreen from './screens/WorkshopsScreen';
import FamiliesScreen from './screens/FamiliesScreen';
import VisitsScreen from './screens/VisitsScreen';
import TeamScreen from './screens/TeamScreen';
import ReportsScreen from './screens/ReportsScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'workshops':
        return <WorkshopsScreen />;
      case 'families':
        return <FamiliesScreen />;
      case 'visits':
        return <VisitsScreen />;
      case 'team':
        return <TeamScreen />;
       case 'reports':
        return <ReportsScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="flex flex-col h-screen font-sans">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </main>
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
}
