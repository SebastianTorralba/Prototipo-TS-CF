
import React from 'react';
import Header from '../components/Header';
import Icon from '../components/Icon';

const ReportCard: React.FC<{ title: string; description: string; onGenerate: () => void }> = ({ title, description, onGenerate }) => (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-start">
        <div className="flex items-center mb-2">
            <Icon name="document-report" className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 flex-1 mb-4">{description}</p>
        <button 
            onClick={onGenerate}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
            Generar Informe
        </button>
    </div>
);


const ReportsScreen: React.FC = () => {
    const handleGenerateReport = (reportType: string) => {
        alert(`Función demo: generando informe de "${reportType}"...`);
    };

  return (
    <div>
      <Header title="Informes" />
      <div className="p-4 space-y-4">
        <ReportCard 
            title="Informe Mensual de Talleres"
            description="Resume la asistencia, participación y feedback de los talleres realizados en el último mes."
            onGenerate={() => handleGenerateReport("Talleres")}
        />
        <ReportCard 
            title="Matriz de Seguimiento Familiar"
            description="Genera un reporte detallado del estado y progreso de las familias seleccionadas."
            onGenerate={() => handleGenerateReport("Seguimiento Familiar")}
        />
        <ReportCard 
            title="Reporte de Visitas"
            description="Consolida todas las visitas domiciliarias realizadas, con observaciones y acuerdos."
            onGenerate={() => handleGenerateReport("Visitas")}
        />
      </div>
    </div>
  );
};

export default ReportsScreen;
