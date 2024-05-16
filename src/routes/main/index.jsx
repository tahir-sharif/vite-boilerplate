import { Dashboard } from '@/pages';
import { notFoundRoute } from '@/routes/not-found';

export const mainRoutes = [
  { index: true, element: <Dashboard /> },
  notFoundRoute,
];
