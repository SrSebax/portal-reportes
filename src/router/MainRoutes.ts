import type { RouteRecordRaw } from 'vue-router';

const MainRoutes: RouteRecordRaw[] = [
  {
    path: '/main',
    meta: {
      requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
    children: [
      {
        name: 'LandingPage',
        path: '/',
        redirect: '/dashboard',
        component: () => import('@/views/dashboard/DefaultDashboard.vue'),
        children: []
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        redirect: '/dashboard/operación-logística/resumen',
        component: () => import('@/views/dashboard/DefaultDashboard.vue'),
        children: [
          {
            name: 'DashboardReport',
            path: ':reportId',
            component: () => import('@/views/dashboard/components/PowerBIReport.vue')
          },
          {
            name: 'ReportDetail',
            path: ':reportId/:detailId',
            component: () => import('@/views/dashboard/components/PowerBIReport.vue')
          },
        ]
      },
      {
        name: 'Typography',
        path: '/typography',
        component: () => import('@/views/typography/TypographyPage.vue'),
        children: []
      },
      {
        name: 'Colors',
        path: '/colors',
        component: () => import('@/views/colors/ColorPage.vue'),
        children: []
      },
      {
        name: 'Shadow',
        path: '/shadow',
        component: () => import('@/views/shadows/ShadowPage.vue'),
        children: []
      },
      {
        name: 'Color',
        path: '/icon/ant',
        component: () => import('@/views/icons/AntDesignIcons.vue'),
        children: []
      },
      {
        name: 'other',
        path: '/sample-page',
        component: () => import('@/views/StarterPage.vue'),
        children: []
      }
    ]
  }
];

export default MainRoutes;