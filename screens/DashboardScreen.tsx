
import React from 'react';
import { WORKSHOPS, FAMILIES, NOTIFICATIONS } from '../constants';
import Header from '../components/Header';
import Icon from '../components/Icon';

const StatCard: React.FC<{ title: string; value: number | string; icon: React.ComponentProps<typeof Icon>['name']; color: string }> = ({ title, value, icon, color }) => (
  <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
    <div className={`p-3 rounded-full mr-4 ${color}`}>
      <Icon name={icon} className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const DashboardScreen: React.FC = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="p-4 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Resumen General</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard title="Talleres activos" value={WORKSHOPS.length} icon="clipboard-list" color="bg-indigo-500" />
            <StatCard title="Familias registradas" value={FAMILIES.length} icon="users" color="bg-sky-500" />
            <StatCard title="Solicitudes pendientes" value={NOTIFICATIONS.length} icon="bell" color="bg-amber-500" />
            <StatCard title="Visitas programadas" value="3" icon="calendar" color="bg-emerald-500" />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Próximos Talleres</h2>
          <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
            {WORKSHOPS.slice(0, 3).map((workshop) => (
              <div key={workshop.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{workshop.title}</p>
                  <p className="text-sm text-gray-500">Mes: {workshop.month} · {workshop.participants} participantes</p>
                </div>
                <Icon name="chevron-right" className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Solicitudes Recientes</h2>
          <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
            {NOTIFICATIONS.map((notification) => (
              <div key={notification.id} className="flex flex-col">
                  <p className="text-sm font-medium text-gray-700">{notification.text}</p>
                  <p className="text-xs text-gray-400 self-end">{notification.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardScreen;
