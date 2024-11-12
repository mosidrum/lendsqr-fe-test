import './Dashboard.scss';
import { Outlet } from 'react-router-dom';
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';

import { Logo, SearchBox } from '../../components';
import user from '../../assets/user.png';
import { SideBar } from './SideBar.tsx';

export const Dashboard = () => (
  <div className="dashboard-layout">
    <header className="header d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between width-50 align-items-center">
        <Logo />
        <SearchBox />
      </div>
      <div className="d-flex justify-content-end gap-2 align-items-center  width-50">
        <div className="text-color-secondary text-underline mr-2 cursor-pointer">Docs</div>
        <IoIosNotificationsOutline color="#213f7d" size={26} />
        <img src={user} alt="user" className="user" />
        <div className="text-color-secondary">Adedeji</div>
        <IoMdArrowDropdown color="#213f7d" size={18} className="ml-n1" />
      </div>
    </header>
    <aside className="sidebar p-1 width-100 background-white">
      <SideBar />
    </aside>
    <main className="content">
      <Outlet />
    </main>
  </div>
);
