import './BaseField.scss';
import { ReactNode } from 'react';

type BaseFieldProps = {
  icon?: string | ReactNode;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email';
};

export const BaseField = ({ icon, placeholder, value, type }: BaseFieldProps) => (
  <div className="d-flex align-items-center border-primary width-100 border-radius px-2">
    <input
      placeholder={placeholder}
      value={value}
      type={type}
      className="width-100 border-none outline-none font-small input-field text-color-primary fw-normal"
    />
    {typeof icon === 'string' ? (
      <div className="font-smaller text-color-tertiary fw-medium letter-spacing">{icon}</div>
    ) : (
      <div>{icon}</div>
    )}
  </div>
);
