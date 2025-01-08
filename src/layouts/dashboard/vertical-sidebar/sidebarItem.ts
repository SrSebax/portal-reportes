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
    to: '/dashboard'
  },
  {
    title: 'Operación Logística',
    icon: CarOutlined,
    to: '/report'
  },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: FontSizeOutlined,
    to: '/typography'
  },
  {
    title: 'Color',
    icon: BgColorsOutlined,
    to: '/colors'
  },
  {
    title: 'Shadow',
    icon: BarcodeOutlined,
    to: '/shadow'
  },
  {
    title: 'Ant Icons',
    icon: CrownOutlined,
    to: '/icon/ant'
  },
  { header: 'Support' },
  {
    title: 'Sample Page',
    icon: ChromeOutlined,
    to: '/sample-page'
  },
];

export default sidebarItem;
