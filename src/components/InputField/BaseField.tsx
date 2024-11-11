import './BaseField.scss';

type BaseFieldProps = {
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email';
  isPassword?: boolean;
};

export const BaseField = ({ placeholder, value, type, isPassword }: BaseFieldProps) => (
  <div className="d-flex align-items-center border-primary width-100 border-radius px-2">
    <input
      placeholder={placeholder}
      value={value}
      type={type}
      className="width-100 border-none outline-none font-small input-field text-color-primary fw-normal"
    />
    {isPassword && (
      <p className="font-smaller text-color-tertiary fw-medium letter-spacing">SHOW</p>
    )}
  </div>
);
