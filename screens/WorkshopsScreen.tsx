
import React from 'react';
import Header from '../components/Header';
import Icon from '../components/Icon';
import { WORKSHOPS } from '../constants';
import { Workshop } from '../types';

const WorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="font-bold text-lg text-indigo-700">{workshop.title}</h3>
    <div className="flex items-center text-gray-500 mt-2 text-sm">
      <Icon name="calendar" className="w-4 h-4 mr-2" />
      <span>Planificado para: {workshop.month}</span>
    </div>
    <div className="flex items-center text-gray-500 mt-1 text-sm">
      <Icon name="users" className="w-4 h-4 mr-2" />
      <span>{workshop.participants} participantes</span>
    </div>
    <div className="mt-4 flex gap-2">
      <button className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold hover:bg-indigo-200">Ver lista</button>
      <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-200">Editar</button>
    </div>
  </div>
);

const WorkshopsScreen: React.FC = () => {
  function handleCreateWorkshop() {
    alert("Función demo: crear taller");
  }

  return (
    <div className="relative min-h-screen">
      <Header title="Talleres" />
      <div className="p-4 space-y-4">
        {WORKSHOPS.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
      <button 
        onClick={handleCreateWorkshop}
        className="fixed bottom-24 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
      >
        <Icon name="plus" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WorkshopsScreen;
