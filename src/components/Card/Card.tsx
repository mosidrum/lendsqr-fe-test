import { CardProps } from '../../pages';
import './Card.scss';

export const Card = ({ icon, title, count, background }: CardProps) => (
  <div className="card-wrapper d-flex flex-dir-column gap-1">
    <div className="icon d-flex align-items-center justify-content-center" style={{ background }}>
      <img src={icon} alt={title} />
    </div>
    <div className=" d-flex text-color-secondary2 font-small">{title}</div>
    <div className="font-larger">{count}</div>
  </div>
);
