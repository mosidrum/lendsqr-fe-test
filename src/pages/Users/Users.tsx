import { Card } from '../../components/Card/Card.tsx';
import { dashboardCardData } from '../Dashboard';
import './User.scss';
import { DataTable } from '../../components';
import { fetcher } from '../../api';
import useSWR from 'swr';
import { User } from '../../types';

export const Users = () => {
  const { data, error } = useSWR<User[]>('http://localhost:3001/users', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className="font-larger text-color-secondary mb-4 fw-medium">Users</div>
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
    </div>
  );
};
