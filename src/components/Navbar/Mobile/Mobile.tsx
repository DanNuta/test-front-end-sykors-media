import { FaBars, FaSearch } from "react-icons/fa";

import "./style.css";

export const Mobile = () => {
  return (
    <>
      <div>
        <FaBars size={24} />
      </div>
      <div>LOGO</div>
      <div>
        <FaSearch size={24} />
      </div>
    </>
  );
};
