
import React from 'react';
import { Screen } from '../types';
import Icon from './Icon';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const navItems: { screen: Screen; label: string; icon: React.ComponentProps<typeof Icon>['name'] }[] = [
  { screen: 'dashboard', label: 'Inicio', icon: 'home' },
  { screen: 'workshops', label: 'Talleres', icon: 'clipboard-list' },
  { screen: 'families', label: 'Familias', icon: 'users' },
  { screen: 'visits', label: 'Visitas', icon: 'calendar' },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
      <div className="flex justify-around max-w-7xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.screen}
            onClick={() => setActiveScreen(item.screen)}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm transition-colors duration-200 ${
              activeScreen === item.screen ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'
            }`}
          >
            <Icon name={item.icon} className="w-6 h-6 mb-1" />
            <span>{item.label}</span>
            {activeScreen === item.screen && (
              <div className="w-8 h-1 bg-indigo-600 rounded-full mt-1"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
