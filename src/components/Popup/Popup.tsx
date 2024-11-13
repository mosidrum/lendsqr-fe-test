import './Popup.scss';
import { FiEye } from 'react-icons/fi';
import { LuUserCheck2, LuUserX2 } from 'react-icons/lu';
import { Dispatch, SetStateAction } from 'react';

type PopupProps = {
  openPopup: boolean;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
};

export const Popup = ({ openPopup, setOpenPopup }: PopupProps) => (
  <div
    className="popup-menu d-flex flex-dir-column align-items-center justify-content-center gap-2 p-2"
    onClick={() => setOpenPopup(!openPopup)}
  >
    <div className="d-flex align-items-center gap-1 text-color-primary">
      <FiEye size={14} />
      <div className="font-small">View Details</div>
    </div>
    <div className="d-flex align-items-center gap-1 text-color-primary">
      <LuUserCheck2 size={14} />
      <div className="font-small">Blacklist User</div>
    </div>
    <div className="d-flex align-items-center gap-1 text-color-primary">
      <LuUserX2 size={14} />
      <div className="font-small">Activate User</div>
    </div>
  </div>
);
