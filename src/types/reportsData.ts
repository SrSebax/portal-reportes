import { CarOutlined, TeamOutlined } from '@ant-design/icons-vue';

interface Report {
  name: string;
  pageName: string;
}

interface Workspace {
  title: string;
  urlBase: string;
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
      urlBase: 'https://app.powerbi.com/reportEmbed?reportId=c1ddc42c-aef5-4f90-8250-c11e42486b99&autoAuth=true&ctid=6331d276-7576-44ee-8e46-cff8f02a06b0',
      // View: https://app.powerbi.com/view?r=eyJrIjoiYjk0ZjI1NDEtZDQ1Yi00NzNkLTgyZDQtODI2ZTFjMTZhOTY2IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9
      icon: CarOutlined,
      reports: [
        { name: 'RESUMEN', pageName: 'd9cef9a27f3c7a99da2a' },
        { name: 'DESPACHO', pageName: 'd58e0b4a0ebb08692909' },
        { name: 'RECIBOS', pageName: '88401df755fc8074f6ee' },
        { name: 'PROMESA', pageName: 'd6df0764b8fe903874d3' },
        { name: 'DESTINOS', pageName: 'd5ea74715e98fad45b51' }
      ]
    },
    {
      title: 'Coordinación Comercial',
      urlBase: 'https://app.powerbi.com/reportEmbed?reportId=f578eca9-2279-4386-b527-0ac46a82179b&autoAuth=true&ctid=6331d276-7576-44ee-8e46-cff8f02a06b0',
      // View: 'https://app.powerbi.com/view?r=eyJrIjoiOTlhOWU4MGQtYmFkNy00NTFjLTljNTMtNDVjZjQwNDhiNDA3IiwidCI6IjYzMzFkMjc2LTc1NzYtNDRlZS04ZTQ2LWNmZjhmMDJhMDZiMCJ9',
      icon: TeamOutlined,
      reports: [
        { name: 'RESUMEN VENTAS', pageName: '43169b4e7b4058644a23' },
        { name: 'RECAUDO x BANDA', pageName: '66e44d28b787ba02d8da' },
        { name: 'TOTAL CIA GLOBAL', pageName: '3bd48b1f5e044a37399a' },
        { name: 'TOTAL CIA TRADICIONALES', pageName: 'c1b15fb5c26c695aa51b' },
        { name: 'TOTAL CIA NUEVOS', pageName: '836abfc0d6e0d3b58955' },
        { name: 'GERENCIA', pageName: 'a027981c6ce9717ded0a' },
        { name: 'CMA', pageName: '8f6d03ff9bcbb509c32a' },
        { name: 'RESULTADOS AC', pageName: '398043a0a2a390522555' },
        { name: 'RESULTADOS CC', pageName: 'cb983131bfd4afbf8c6e' },
        { name: 'CRECIMIENTO', pageName: 'd1ca6df0e6d04050d439' },
        { name: 'OPERATIVIDAD', pageName: 'dd622c19bb781a9ea92f' },
        { name: 'PRODUCTO', pageName: '743f3acf7a5583a7e1bd' },
        { name: 'OPERATIVIDAD DETALLADO', pageName: 'd805023f18d01dbb60d7' },
        { name: 'PRESUPUESTO GLOBAL', pageName: '68deda49d5dc37e2ec13' },
        { name: 'PRESUPUESTO ZONAS ASESOR', pageName: '44b99a810162a38aefa9' }
      ]
    }
  ]
};

export function constructReportUrls(workspace: Workspace): Workspace {
  return {
    ...workspace,
    reports: workspace.reports.map(report => ({
      ...report,
      url: `${workspace.urlBase}&pageName=${report.pageName}`
    }))
  };
}

reportsData.workspaces = reportsData.workspaces.map(constructReportUrls);
