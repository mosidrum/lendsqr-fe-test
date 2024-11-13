import './Popup.scss';
import { FiEye } from 'react-icons/fi';
import { LuUserCheck2, LuUserX2 } from 'react-icons/lu';
import { Dispatch, SetStateAction } from 'react';

type PopupProps = {
  openPopup: boolean;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
};

export const Popup = ({ openPopup, setOpenPopup, onClick }: PopupProps) => (
  <div
    className="popup-menu d-flex flex-dir-column align-items-center justify-content-center"
    onClick={() => setOpenPopup(!openPopup)}
  >
    <div className="d-flex align-items-center gap-1 text-color-primary py-1" onClick={onClick}>
      <FiEye size={14} />
      <div className="font-small">View Details</div>
    </div>
    <div className="d-flex align-items-center gap-1 text-color-primary py-1">
      <LuUserCheck2 size={14} />
      <div className="font-small">Blacklist User</div>
    </div>
    <div className="d-flex align-items-center gap-1 text-color-primary py-1">
      <LuUserX2 size={14} />
      <div className="font-small">Activate User</div>
    </div>
  </div>
);
