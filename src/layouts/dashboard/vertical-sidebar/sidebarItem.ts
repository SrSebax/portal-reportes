import { DatabaseOutlined, LineChartOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import { reportsData } from '@/types/reportsData';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Reportes PowerBI' },
  ...reportsData.workspaces.map((workspace) => ({
    title: workspace.title,
    icon: workspace.icon,
    to: `/dashboard/${workspace.title.toLowerCase().replace(/ /g, '-')}/${workspace.reports[0].name.toLowerCase().replace(/ /g, '-')}`,
    children: workspace.reports.map((report) => ({
      title: report.name,
      to: `/dashboard/${workspace.title.toLowerCase().replace(/ /g, '-')}/${report.name.toLowerCase().replace(/ /g, '-')}`
    })),
  })),
  { header: 'Datos y Análisis' },
  {
    title: 'Bases de Datos',
    icon: DatabaseOutlined,
    to: '/data/databases',
  },
  {
    title: 'Análisis de Datos',
    icon: LineChartOutlined,
    to: '/data/analysis',
  },
  {
    title: 'Visualizaciones',
    icon: PieChartOutlined,
    to: '/data/visualizations',
  },
];

export default sidebarItem;