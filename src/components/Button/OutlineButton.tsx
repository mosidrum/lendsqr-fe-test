import { BaseButton, BaseButtonProps } from './BaseButton.tsx';

type OutlineButtonProps = BaseButtonProps;

export const OutlineButton = ({ title, className, onClick }: OutlineButtonProps) => (
  <BaseButton
    title={title}
    className={`${className} text-primary background-white width-100 text-color-primary border-primary border-radius font-small fw-medium`}
    onClick={onClick}
  />
);
