import { ReactNode } from 'react';

type SideBarListProps = {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant: 'primary' | 'secondary';
};

export const SideBarList = ({
  title,
  leftIcon,
  rightIcon,
  variant = 'primary'
}: SideBarListProps) => {
  const textColor = variant === 'primary' ? '#213f7d' : '#545f7d';

  return (
    <div className="sidebar-list d-flex align-items-center gap-1">
      {leftIcon}
      <div className="font-normal" style={{ color: textColor }}>
        {title}
      </div>
      {rightIcon}
    </div>
  );
};
