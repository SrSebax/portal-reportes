import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import MainRoutes from './MainRoutes';

const routes: RouteRecordRaw[] = [
  ...MainRoutes,
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});