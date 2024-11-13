import { BsArrowLeft } from 'react-icons/bs';
import './UserDetails.scss';
import { UserDetailsCard } from '../../components';

export const UserDetails = () => {
  return (
    <div className="background-gray">
      <div className="d-flex gap-1 align-items-center">
        <BsArrowLeft />
        <div>Back to Users</div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="font-larger text-color-secondary fw-medium">User details</div>
        <div className="d-flex gap-2">
          <button className="blacklist font-small">BLACKLIST USER</button>
          <button className="activate font-small">ACTIVATE USER</button>
        </div>
      </div>
      <UserDetailsCard />
    </div>
  );
};
