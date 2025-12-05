import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Icon from '../components/Icon';
import { NOTIFICATIONS } from '../constants';

// Datos de ejemplo para las visitas programadas
const scheduledVisits = [
  { date: '2025-07-10', family: 'Familia Pérez', details: 'Seguimiento de acuerdos del taller de comunicación.' },
  { date: '2025-07-15', family: 'Familia Gómez', details: 'Primera visita de contacto y diagnóstico.' },
  { date: '2025-07-15', family: 'Familia Soto', details: 'Visita de contención por situación particular.' },
  { date: '2025-08-02', family: 'Familia Ruiz', details: 'Evaluación de progreso y aplicación de herramientas.' },
];

const VisitsScreen: React.FC = () => {
  const visitRequests = NOTIFICATIONS.filter(n => n.text.toLowerCase().includes('visita domiciliaria'));
  
  const [currentDate, setCurrentDate] = useState(new Date('2025-07-01'));
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2025-07-15T00:00:00'));

  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    
    // Adjust start day to be Monday-based (0 = Mon, 6 = Sun)
    const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;

    const days = [];
    
    // Days from previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        days.push({ date: new Date(year, month - 1, prevMonthLastDay - i), isCurrentMonth: false });
    }

    // Days of current month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    
    // Days from next month
    const remainingCells = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingCells; i++) {
        days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    
    return days;
  }, [currentDate]);

  const visitsByDate = useMemo(() => {
    const map = new Map<string, typeof scheduledVisits>();
    scheduledVisits.forEach(visit => {
        const dateKey = visit.date;
        if (!map.has(dateKey)) {
            map.set(dateKey, []);
        }
        map.get(dateKey)?.push(visit);
    });
    return map;
  }, []);

  const visitsForSelectedDay = useMemo(() => {
      if (!selectedDate) return [];
      const dateKey = selectedDate.toISOString().split('T')[0];
      return visitsByDate.get(dateKey) || [];
  }, [selectedDate, visitsByDate]);
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const isSameDay = (d1: Date, d2: Date | null) => {
      return d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  }

  return (
    <div>
      <Header title="Visitas Domiciliarias" />
      <div className="p-4 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Solicitudes de Visita</h2>
          {visitRequests.length > 0 ? (
            <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
              {visitRequests.map((req) => (
                <div key={req.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="p-2 bg-amber-100 rounded-full mr-3">
                      <Icon name="bell" className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{req.text}</p>
                      <p className="text-xs text-gray-500">{req.date}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-semibold hover:bg-indigo-700">Agendar</button>
                </div>
              ))}
            </div>
          ) : (
             <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <p className="text-gray-500">No hay nuevas solicitudes de visita.</p>
             </div>
          )}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Visitas Programadas</h2>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
                <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100">
                    <Icon name="chevron-right" className="w-5 h-5 text-gray-500 transform rotate-180"/>
                </button>
                <h3 className="font-bold text-lg text-gray-800">
                    {currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase())}
                </h3>
                <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100">
                    <Icon name="chevron-right" className="w-5 h-5 text-gray-500"/>
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 mb-2">
                {daysOfWeek.map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {calendarDays.map(({ date, isCurrentMonth }, index) => {
                    const dateKey = date.toISOString().split('T')[0];
                    const hasVisit = visitsByDate.has(dateKey);
                    const isSelected = isSameDay(date, selectedDate);
                    return (
                        <button 
                            key={index} 
                            onClick={() => setSelectedDate(date)}
                            className={`relative w-9 h-9 flex items-center justify-center rounded-full transition-colors text-sm
                                ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                                ${isCurrentMonth && !isSelected ? 'hover:bg-gray-100' : ''}
                                ${isSelected ? 'bg-indigo-600 text-white font-bold' : ''}
                            `}
                        >
                            {date.getDate()}
                            {isCurrentMonth && hasVisit && (
                                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-indigo-500'}`}></span>
                            )}
                        </button>
                    );
                })}
            </div>
            
            {selectedDate && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        {selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </h4>
                    {visitsForSelectedDay.length > 0 ? (
                        <div className="space-y-2">
                            {visitsForSelectedDay.map((visit, i) => (
                                <div key={i} className="p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                                    <p className="font-medium text-indigo-900 text-sm">{visit.family}</p>
                                    <p className="text-xs text-indigo-700 mt-1">{visit.details}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500 italic">No hay visitas programadas para este día.</p>
                    )}
                </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisitsScreen;