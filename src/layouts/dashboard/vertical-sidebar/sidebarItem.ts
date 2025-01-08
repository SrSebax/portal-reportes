// icons
import {
  ChromeOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  CrownOutlined,
  TeamOutlined,
  CarOutlined
} from '@ant-design/icons-vue';

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
  {
    title: 'Coordinación Comercial',
    icon: TeamOutlined,
    to: '/dashboard/coordinacion-comercial'
  },
  {
    title: 'Operación Logística',
    icon: CarOutlined,
    to: '/dashboard/operacion-logistica'
  },
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
  },
];

export default sidebarItem;