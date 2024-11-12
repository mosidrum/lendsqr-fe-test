import { IoIosArrowDown } from 'react-icons/io';
import {
  businessesSideBarItems,
  customersSideBarItems,
  settingsSideBarItems,
  SideBarList,
  SideBarSection
} from '../../components';
import briefcase from '../../assets/icons/briefcase.svg';
import dashboard from '../../assets/icons/home.svg';

const ICON_SIZE = 16;

export const SideBar = () => (
  <div className="d-flex flex-dir-column">
    <div className="d-flex flex-dir-column my-3 gap-4">
      <SideBarList
        title="Switch Organization"
        image={briefcase}
        variant="primary"
        rightIcon={<IoIosArrowDown color="#213F7D" size={ICON_SIZE} />}
      />
      <SideBarList title="Dashboard" variant="secondary" image={dashboard} />
    </div>
    <div className="d-flex flex-dir-column gap-3">
      <SideBarSection title="CUSTOMERS" items={customersSideBarItems} />
      <SideBarSection title="BUSINESSES" items={businessesSideBarItems} />
      <SideBarSection title="SETTINGS" items={settingsSideBarItems} />
    </div>
  </div>
);
