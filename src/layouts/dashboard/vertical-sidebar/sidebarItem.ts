// icons
import {
  ChromeOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  CrownOutlined,
} from '@ant-design/icons-vue';
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

interface Report {
  name: string;
  url: string;
}

const sidebarItem: menu[] = [
  { header: 'Reportes PowerBI' },
  ...reportsData.workspaces.map((workspace) => ({
    title: workspace.title,
    icon: workspace.icon,
    to: `/dashboard/${workspace.title.toLowerCase().replace(/ /g, '-')}/${workspace.reports[0].name.toLowerCase().replace(/ /g, '-')}`,
    children: workspace.reports.map((report: Report) => ({
      title: report.name,
      to: `/dashboard/${workspace.title.toLowerCase().replace(/ /g, '-')}/${report.name.toLowerCase().replace(/ /g, '-')}`
    }))
  })),
  { header: 'Utilidades' },
  {
    title: 'Tipografía',
    icon: FontSizeOutlined,
    to: '/typography'
  },
  {
    title: 'Color',
    icon: BgColorsOutlined,
    to: '/colors'
  },
  {
    title: 'Sombra',
    icon: BarcodeOutlined,
    to: '/shadow'
  },
  {
    title: 'Iconos Ant',
    icon: CrownOutlined,
    to: '/icon/ant'
  },
  { header: 'Soporte' },
  {
    title: 'FAQ',
    icon: ChromeOutlined,
    to: '/sample-page'
  }
];

export default sidebarItem;