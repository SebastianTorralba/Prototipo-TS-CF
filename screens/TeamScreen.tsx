
import React from 'react';
import Header from '../components/Header';
import Icon from '../components/Icon';

const TeamMember: React.FC<{ role: string; description: string; icon: React.ComponentProps<typeof Icon>['name'] }> = ({ role, description, icon }) => (
    <div className="flex items-start p-4 border-b last:border-b-0">
        <div className="p-3 bg-indigo-100 rounded-full mr-4">
            <Icon name={icon} className="w-6 h-6 text-indigo-600"/>
        </div>
        <div>
            <h3 className="font-semibold text-gray-800">{role}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

const TeamScreen: React.FC = () => {
  return (
    <div>
      <Header title="Equipo" />
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
                <h2 className="text-lg font-bold text-gray-800">Equipo Interdisciplinario</h2>
                <p className="text-sm text-gray-500 mt-1">Profesionales dedicados al fortalecimiento familiar.</p>
            </div>
            <TeamMember 
                role="Lic. Trabajo Social" 
                description="Coordinación de visitas domiciliarias y seguimiento de casos."
                icon="user-group"
            />
             <TeamMember 
                role="Psicólogo/a" 
                description="Contención familiar, grupos de apoyo y talleres de gestión emocional."
                icon="user-group"
            />
             <TeamMember 
                role="Talleristas" 
                description="Implementación de actividades lúdicas y formativas para las familias."
                icon="user-group"
            />
        </div>
      </div>
    </div>
  );
};

export default TeamScreen;
