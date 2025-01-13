import { CarOutlined, TeamOutlined } from '@ant-design/icons-vue';

interface Report {
  name: string;
  url: string;
}

interface Workspace {
  title: string;
  url: string;
  icon: typeof CarOutlined | typeof TeamOutlined;
  reports: Report[];
}

interface ReportsData {
  workspaces: Workspace[];
}

export const reportsData: ReportsData = {
  workspaces: [
    {
      title: 'Operación Logística',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9',
      icon: CarOutlined,
      reports: [
        {
          name: 'RESUMEN',
          url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9&pageName=d9cef9a27f3c7a99da2a'
        },
        {
          name: 'DESPACHO',
          url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9&pageName=d58e0b4a0ebb08692909'
        },
        {
          name: 'RECIBOS',
          url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9&pageName=88401df755fc8074f6ee'
        },
        {
          name: 'PROMESA',
          url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9&pageName=d6df0764b8fe903874d3'
        },
        {
          name: 'DESTINOS',
          url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9&pageName=d5ea74715e98fad45b51'
        }
      ]
    },
    {
      title: 'Coordinación Comercial',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiOTlhOWU4MGQtYmFkNy00NTFjLTljNTMtNDVjZjQwNDhiNDA3IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9',
      icon: TeamOutlined,
      reports: [
        {
          name: 'RESUMEN VENTAS',
          url: 'https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9&pageName=43169b4e7b4058644a23'
        }
      ]
    }
  ]
};