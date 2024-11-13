import { Route, Routes } from 'react-router-dom';
import { paths } from './paths.ts';
import { Dashboard, Login, UserDetails, Users } from '../pages';

export const AppRoutes = () => (
  <Routes>
    <Route path={paths.login} element={<Login />} />
    <Route path={paths.dashboard} element={<Dashboard />}>
      <Route path={paths.dashboard} element={<Users />} />
      <Route path={`${paths.dashboard}/:id`} element={<UserDetails />} />
    </Route>
  </Routes>
);
