import './StatusBadge.scss';
import { capitalizeFirstLetter } from '../../utils';
import { statusColours } from './statusColours.ts';

type StatusBadgeProps = {
  status: string;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const { backgroundColor, color } = statusColours(status);

  return (
    <div className="statusBadge" style={{ backgroundColor, color }}>
      {capitalizeFirstLetter(status)}
    </div>
  );
};
