
import { Workshop, Family, Notification } from './types';

export const WORKSHOPS: Workshop[] = [
  { id: 1, title: "Taller: Gestión Emocional", month: "Mar", participants: 12 },
  { id: 2, title: "Rutinas y Autonomía", month: "Abr", participants: 8 },
  { id: 3, title: "Corresponsabilidad en el Hogar", month: "May", participants: 15 },
  { id: 4, title: "Comunicación Asertiva Familiar", month: "Jun", participants: 10 },
];

export const FAMILIES: Family[] = [
  { id: 1, name: "Familia Pérez", contact: "María (mamá)", status: "Activa" },
  { id: 2, name: "Familia Gómez", contact: "Juan (papá)", status: "Baja participación" },
  { id: 3, name: "Familia Ruiz", contact: "Ana (mamá)", status: "Activa" },
  { id: 4, name: "Familia Soto", contact: "Carlos (tío)", status: "Activa" },
  { id: 5, name: "Familia Diaz", contact: "Laura (abuela)", status: "Inactiva" },
];

export const NOTIFICATIONS: Notification[] = [
  { id: 1, text: "Nueva inscripción al taller 'Rutinas y Autonomía'", date: "2025-03-02" },
  { id: 2, text: "Solicitud de visita domiciliaria: Familia Gómez", date: "2025-03-01" },
  { id: 3, text: "Taller 'Gestión Emocional' lleno", date: "2025-02-28" },
];
