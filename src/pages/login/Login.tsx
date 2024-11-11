import lendsqr from '../../assets/logo.svg';
import illustration from '../../assets/illustration.svg';
import { BaseField, PrimaryButton } from '../../components';
import './login.scss';

export const Login = () => (
  <div className="d-flex flex-dir-column justify-content-center">
    <div className="d-flex align-items-center">
      <div className="width-50 background-gray vh-100 d-flex flex-dir-column left-div">
        <div className="logo d-flex align-items-center">
          <img src={lendsqr} alt="logo" />
        </div>
        <div className="d-flex justify-content-center flex-grow">
          <img src={illustration} alt="illustration" className="img-fluid" />
        </div>
      </div>
      <div className="d-flex flex-dir-column justify-content-center width-50 background-white vh-100 right-div">
        <div className="logo2 align-items-center mb-5 d-none">
          <img src={lendsqr} alt="logo" />
        </div>
        <div className="d-flex flex-dir-column gap-1 mb-3">
          <div className="welcome text-color-secondary">Welcome!</div>
          <div className="text-color-secondary2 font-small">Enter details to login.</div>
        </div>
        <div className="d-flex flex-dir-column gap-3 mt-4">
          <BaseField placeholder="Email" />
          <BaseField placeholder="Password" isPassword />
          <div className="font-smaller text-color-tertiary fw-medium letter-spacing">
            FORGOT PASSWORD?
          </div>
        </div>
        <PrimaryButton title="LOG IN" className="mt-4" />
      </div>
    </div>
  </div>
);
