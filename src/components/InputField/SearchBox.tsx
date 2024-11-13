import { IoSearchOutline } from 'react-icons/io5';
import './SearchBox.scss';

export const SearchBox = () => (
  <div className="container d-flex align-items-center border-radius">
    <input
      className=" outline-none px-2 width-100 height-100 input border-primary text-color-primary"
      placeholder="Search for anything"
    />
    <div className="search-input d-flex align-items-center justify-content-center height-100 p-1 background-button-color">
      <IoSearchOutline color="white" size={18} />
    </div>
  </div>
);
