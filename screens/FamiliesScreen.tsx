
import React, { useState } from 'react';
import Header from '../components/Header';
import { FAMILIES } from '../constants';
import { Family } from '../types';
import Icon from '../components/Icon';

const getStatusColor = (status: Family['status']) => {
  switch (status) {
    case 'Activa':
      return 'bg-green-100 text-green-800';
    case 'Baja participación':
      return 'bg-yellow-100 text-yellow-800';
    case 'Inactiva':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const FamilyCard: React.FC<{ family: Family }> = ({ family }) => {
  function handleRequestVisit(familyId: number) {
    alert(`Solicitada visita domiciliaria para familia ID ${familyId}`);
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{family.name}</h3>
          <p className="text-sm text-gray-500">Contacto: {family.contact}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(family.status)}`}>
          {family.status}
        </span>
      </div>
      <div className="mt-4 flex gap-2">
        <button 
          onClick={() => handleRequestVisit(family.id)}
          className="w-full px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 flex items-center justify-center gap-2">
          <Icon name="calendar" className="w-4 h-4"/>
          Solicitar visita
        </button>
        <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">Ver ficha</button>
      </div>
    </div>
  );
};

const FamiliesScreen: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFamilies = FAMILIES.filter(family => 
        family.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        family.contact.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <Header title="Familias" />
      <div className="p-4">
        <div className="mb-4">
            <input 
                type="text"
                placeholder="Buscar familia por nombre o contacto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div className="space-y-4">
            {filteredFamilies.map((family) => (
            <FamilyCard key={family.id} family={family} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FamiliesScreen;
