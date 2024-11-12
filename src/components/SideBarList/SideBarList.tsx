import { ReactNode } from 'react';
import './SideBarList.scss';

type SideBarListProps = {
  title?: string;
  image?: string;
  rightIcon?: ReactNode;
  variant: 'primary' | 'secondary';
};

export const SideBarList = ({ title, image, rightIcon, variant = 'primary' }: SideBarListProps) => {
  const textColor = variant === 'primary' ? '#213f7d' : '#545f7d';

  return (
    <div className="sidebar-list d-flex align-items-center">
      <img src={image} alt={title} />
      <div className="font-normal" style={{ color: textColor }}>
        {title}
      </div>
      {rightIcon}
    </div>
  );
};
