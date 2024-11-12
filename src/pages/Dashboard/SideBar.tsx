import { FaBriefcase } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';

import { SideBarList } from '../../components';

const ICON_SIZE = 16;

export const SideBar = () => (
  <div className="d-flex flex-dir-column">
    <SideBarList
      title="Switch Organization"
      variant="primary"
      leftIcon={<FaBriefcase color="#213F7D" size={ICON_SIZE} />}
      rightIcon={<IoIosArrowDown color="#213F7D" size={ICON_SIZE} />}
    />
    <SideBarList title="Dashboard" leftIcon={<FaHome />} variant="secondary" />
  </div>
);
