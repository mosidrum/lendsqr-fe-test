import { Rating } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';
import './UserDetails.scss';
import { formatToNaira } from '../../utils';

type UserDetailsCardProps = {
  name?: string;
  userId?: string;
  amount?: number;
  accountNumber?: number;
  bankName?: string;
};

const subHeader = [
  'General Details',
  'Documents',
  'Bank Details',
  'Loans',
  'Savings',
  'App and System'
];
const ACTIVE_INDEX = 0;

export const UserDetailsCard = ({
  name,
  userId,
  amount,
  accountNumber,
  bankName
}: UserDetailsCardProps) => (
  <div className="d-flex flex-dir-column">
    <div className="px-3 pt-3 background-white width-100 mt-4 border-radius">
      <div className="d-flex align-items-center ">
        <div className="d-flex align-items-center gap-1 p-3">
          <div className="avatar d-flex align-items-center justify-content-center">
            <AiOutlineUser className="text-color-secondary" size={40} />
          </div>
          <div className="d-flex flex-dir-column gap-1">
            <div className="text-color-secondary font-larger">{name}</div>
            <div className="text-color-primary font-small">{userId}</div>
          </div>
        </div>
        <div className="line" />
        <div className="d-flex flex-dir-column p-3 gap-1">
          <div className="font-normal text-color-secondary">User&apos;s Tier</div>
          <Rating name="customized-3" defaultValue={1} max={3} readOnly />
        </div>
        <div className="line" />
        <div className="d-flex flex-dir-column p-3 gap-1">
          <div className="font-large text-color-secondary">{formatToNaira(amount)}</div>
          <div className="d-flex">
            <div className="text-color-secondary font-smaller">{accountNumber}/</div>
            <div className="text-color-secondary font-smaller">{bankName}</div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-between gap-1">
        {subHeader.map((item, index) => (
          <div
            className={`heading text-center width-100 ${ACTIVE_INDEX === index && 'active'}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);
