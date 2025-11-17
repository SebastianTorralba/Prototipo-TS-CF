
export interface Workshop {
  id: number;
  title: string;
  month: string;
  participants: number;
}

export interface Family {
  id: number;
  name: string;
  contact: string;
  status: 'Activa' | 'Baja participación' | 'Inactiva';
}

export interface Notification {
  id: number;
  text: string;
  date: string;
}

export type Screen = 'dashboard' | 'workshops' | 'families' | 'visits' | 'team' | 'reports';
