import { BsArrowLeft } from 'react-icons/bs';
import './UserDetails.scss';
import { UserDetailsCard } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { InfoSection } from './InfoSection.tsx';
import { User } from '../../types';

export const UserDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const storedUsers = localStorage.getItem('users');
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  const data = users.find((user: User) => user.userId === id);
  const userInfo = data?.personalInfo;
  const eduInfo = data?.educationalInfo;
  const socials = data?.socials;
  const guarantor = data?.guarantor;

  const guarantorInfo = [
    {
      label: 'FULL NAME',
      data: guarantor?.fullName || 'N/A'
    },
    {
      label: 'PHONE NUMBER',
      data: guarantor?.phoneNumber || 'N/A'
    },
    {
      label: 'EMAIL ADDRESS',
      data: guarantor?.email || 'N/A'
    },
    {
      label: 'RELATIONSHIP',
      data: guarantor?.relationship || ''
    }
  ];

  const socialInfo = [
    {
      label: 'TWITTER',
      data: socials?.twitter || 'N/A'
    },
    {
      label: 'FACEBOOK',
      data: socials?.facebook || 'N/A'
    },
    {
      label: 'INSTAGRAM',
      data: socials?.instagram || 'N/A'
    }
  ];
  const educationalInfo = [
    {
      label: 'LEVEL OF EDUCATION',
      data: eduInfo?.level || 'N/A'
    },
    {
      label: 'EMPLOYMENT STATUS',
      data: eduInfo?.employmentStatus || 'N/A'
    },
    {
      label: 'SECTOR OF EMPLOYMENT',
      data: eduInfo?.sector || 'N/A'
    },
    {
      label: 'DURATION OF EMPLOYMENT',
      data: eduInfo?.duration || ''
    },
    {
      label: 'OFFICIAL EMAIL',
      data: eduInfo?.officeEmail || ''
    },
    {
      label: 'MONTHLY INCOME',
      data: eduInfo?.monthlyIncome || ''
    },
    {
      label: 'LOAN REPAYMENT',
      data: eduInfo?.loanRepay || ''
    }
  ];

  const personalInformation = [
    {
      label: 'FULL NAME',
      data: userInfo?.fullName || 'N/A'
    },
    {
      label: 'PHONE NUMBER',
      data: userInfo?.phoneNumber || 'N/A'
    },
    {
      label: 'EMAIL ADDRESS',
      data: userInfo?.email || 'N/A'
    },
    {
      label: 'BVN',
      data: userInfo?.bvn?.toString() || ''
    },
    {
      label: 'GENDER',
      data: userInfo?.gender || ''
    },
    {
      label: 'MARITAL STATUS',
      data: userInfo?.maritalStatus || ''
    },
    {
      label: 'CHILDREN',
      data: userInfo?.children || ''
    },
    {
      label: 'TYPE OF RESIDENCE',
      data: userInfo?.typeOfResidence || ''
    }
  ];

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
        <UserDetailsCard
          name={userInfo?.fullName}
          userId={data?.userId}
          accountNumber={data?.bankAccount}
          bankName={data?.bankName}
          amount={data?.loanAmount}
        />
        <div className="p-3 background-white">
          <InfoSection sectionTitle="Personal Information" data={personalInformation} />
          <hr className="line-straight" />
          <InfoSection sectionTitle="Education and Employment" data={educationalInfo} />
          <hr className="line-straight" />
          <InfoSection sectionTitle="Socials" data={socialInfo} />
          <hr className="line-straight" />
          <InfoSection sectionTitle="Guarantor" data={guarantorInfo} />
        </div>
      </div>
    </div>
  );
};
