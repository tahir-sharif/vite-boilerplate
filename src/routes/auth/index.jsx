import { Login } from '@/pages';
import { notFoundRoute } from '@/routes/not-found';

export const authRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  notFoundRoute,
];
