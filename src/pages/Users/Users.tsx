import useSWR from 'swr';
import { FaChevronDown } from 'react-icons/fa6';
import { dashboardCardData } from '../Dashboard';
import './User.scss';
import { Card, CustomPagination, DataTable } from '../../components';
import { fetcher } from '../../api';
import { User } from '../../types';

export const Users = () => {
  const { data, error } = useSWR<User[]>('http://localhost:3001/users', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="">
      <div className="font-larger text-color-secondary mb-4 fw-medium">Users</div>
      <div className="d-flex flex-dir-column gap-3">
        <div className="cards-container d-flex align-items-center justify-content-between gap-4">
          {dashboardCardData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              count={item.count}
              background={item.background}
            />
          ))}
        </div>
        <DataTable users={data} />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center font-small">
            Showing
            <p className=" d-flex align-items-center gap-2 pagi mx-1">
              <span className="text-color-secondary">100</span>
              <FaChevronDown className="text-color-primary" size={10} />
            </p>
            out of 100
          </div>
          <CustomPagination />
        </div>
      </div>
    </div>
  );
};
