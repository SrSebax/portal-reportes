import type { Comment } from "@/types/Comment";

export const getComments = (path: string): Comment[] => {
  if (path === '/dashboard/coordinacion-comercial') {
    return [
      {
        id: 1,
        name: 'Sofia Montes',
        message: 'comentó tu reporte de Power BI.',
        time: '6:00 PM',
        date: '5 de agosto',
        color: 'lightprimary',
        iconColor: 'text-primary'
      },
      {
        id: 2,
        name: 'Sebastian Londoño',
        message: 'encontró un error en el gráfico de barras.',
        time: '2:45 PM',
        date: 'Hace 7 horas',
        color: 'lighterror',
        iconColor: 'text-error'
      }
    ];
  } else if (path === '/dashboard/operacion-logistica') {
    return [
      {
        id: 1,
        name: 'Naty Rodriguez',
        message: 'solicitó agregar un filtro de fecha al reporte de inventario.',
        time: '6:00 PM',
        date: '5 de agosto',
        color: 'lightprimary',
        iconColor: 'text-primary'
      },
      {
        id: 2,
        name: 'Andres Londoño',
        message: 'revisó el reporte de logística.',
        time: '3:30 PM',
        date: 'Hace 2 horas',
        color: 'lightwarning',
        iconColor: 'text-warning'
      }
    ];
  }
  return [];
};