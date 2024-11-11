import './Button.scss';

export interface BaseButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export const BaseButton = ({ title, onClick, className }: BaseButtonProps) => (
  <button onClick={onClick} className={`${className} border-none cursor-pointer button`}>
    {title}
  </button>
);
