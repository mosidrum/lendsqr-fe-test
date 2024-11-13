import { FaChevronDown, FaCalendarDays } from 'react-icons/fa6';
import { BaseField } from '../InputField';
import './Filter.scss';
import { OutlineButton, PrimaryButton } from '../Button';

export const Filter = () => (
  <div className="d-flex flex-dir-column align-items-start justify-content-start border-primary gap-2 filter-position">
    <div className="width-100">
      <div className="mb-1 text-color-primary">Organisation</div>
      <BaseField
        placeholder="Select"
        icon={<FaChevronDown className="text-color-primary" size={12} />}
      />
    </div>
    <div className="width-100">
      <div className="mb-1 text-color-primary">Username</div>
      <BaseField placeholder="Username" />
    </div>
    <div className="width-100">
      <div className="mb-1 text-color-primary">Email</div>
      <BaseField placeholder="Email" />
    </div>
    <div className="width-100">
      <div className="mb-1 text-color-primary">Date</div>
      <BaseField
        placeholder="Date"
        icon={<FaCalendarDays className="text-color-primary" size={12} />}
      />
    </div>
    <div className="width-100">
      <div className="mb-1 text-color-primary">Phone Number</div>
      <BaseField placeholder="Phone Number" />
    </div>
    <div className="width-100">
      <div className="mb-1 text-color-primary">Status</div>
      <BaseField
        placeholder="Select"
        icon={<FaChevronDown className="text-color-primary" size={12} />}
      />
    </div>
    <div className="d-flex justify-content-between gap-1 width-100">
      <OutlineButton title="Reset" />
      <PrimaryButton title="Filter" />
    </div>
  </div>
);
