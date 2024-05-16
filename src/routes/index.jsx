import { AuthLayout, MainLayout } from '@/layouts';
import { mainRoutes } from './main';
import { authRoutes } from './auth';
import { notFoundRoute } from './not-found';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: mainRoutes,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: authRoutes,
  },
  notFoundRoute,
];
