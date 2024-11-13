import { BaseButton, BaseButtonProps } from './BaseButton.tsx';

type PrimaryButtonProps = BaseButtonProps;

export const PrimaryButton = ({ title, onClick, className }: PrimaryButtonProps) => (
  <BaseButton
    title={title}
    className={`${className} text-primary background-button-color width-100 text-color-white font-small fw-medium border-radius border-none cursor-pointer button`}
    onClick={onClick}
  />
);
