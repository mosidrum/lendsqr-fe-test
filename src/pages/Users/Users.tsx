import { Card } from '../../components/Card/Card.tsx';
import { dashboardCardData } from '../Dashboard';
import './User.scss';

export const Users = () => (
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
  </div>
);
