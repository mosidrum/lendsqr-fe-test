import { BsArrowLeft } from 'react-icons/bs';
import './UserDetails.scss';
import { UserDetailsCard } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import mockedJSONData from '../../data/mockData.json';
import { InfoSection } from './InfoSection.tsx';

export const UserDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const mockData = mockedJSONData.users;

  const data = mockData.find((user) => user.userId === id);
  console.log(data);

  // const personalInformation = [
  //   {
  //     label: 'FULL NAME',
  //     data: data?.fullName
  //   },
  //   {
  //     label: 'PHONE NUMBER',
  //     data: data?.personalInfo.phoneNumber
  //   }
  // ];

  return (
    <div className="background-gray">
      <div className="d-flex gap-1 align-items-center cursor-pointer" onClick={() => navigate(-1)}>
        <BsArrowLeft />
        <div className="font-normal text-color-primary">Back to Users</div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="font-larger text-color-secondary fw-medium">User details</div>
        <div className="d-flex gap-2">
          <button className="blacklist font-small">BLACKLIST USER</button>
          <button className="activate font-small">ACTIVATE USER</button>
        </div>
      </div>
      <div className="d-flex flex-dir-column gap-3">
        <UserDetailsCard />
        <div className="p-3 background-white">
          <InfoSection sectionTitle="Personal Information" />
        </div>
      </div>
    </div>
  );
};
