import lendsqr from '../../assets/logo.svg';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <div className={`${className} d-flex align-items-center`}>
    <img src={lendsqr} alt="logo" />
  </div>
);
