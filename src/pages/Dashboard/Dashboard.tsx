import './Dashboard.scss';
import { Outlet } from 'react-router-dom';
import { Logo, SearchBox } from '../../components';

export const Dashboard = () => (
  <div className="dashboard-layout">
    <header className="header d-flex align-items-center">
      <Logo />
      <SearchBox />
    </header>
    <aside className="sidebar">Sidebar</aside>
    <main className="content">
      <Outlet />
    </main>
  </div>
);
