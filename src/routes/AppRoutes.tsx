import { Route, Routes } from 'react-router-dom';
import { paths } from './paths.ts';
import { Login } from '../pages/login';

export const AppRoutes = () => (
  <Routes>
    <Route path={paths.login} element={<Login />} />
  </Routes>
);
