import { BaseField } from '../InputField';

export const Filter = () => (
  <div className="d-flex flex-dir-column p-2 align-items-center justify-content-center border-primary">
    <div>
      <div>Email</div>
      <BaseField placeholder="Email" />
    </div>
    <div>
      <div>Email</div>
      <BaseField placeholder="Email" />
    </div>
    <div>
      <div>Phone Number</div>
      <BaseField placeholder="Phone Number" />
    </div>
  </div>
);
