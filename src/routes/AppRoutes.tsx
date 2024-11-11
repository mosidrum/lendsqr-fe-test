import { Route, Routes } from 'react-router-dom';
import { paths } from './paths.ts';
import { Dashboard, Login } from '../pages';

export const AppRoutes = () => (
  <Routes>
    <Route path={paths.login} element={<Login />} />
    <Route path={paths.dashboard} element={<Dashboard />} />
  </Routes>
);
