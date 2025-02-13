import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";

import { Search } from "../../Search";

import "./style.css";

export const Mobile = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <>
      <div>
        <FaBars size={24} />
      </div>
      <div>LOGO</div>
      <div>
        <button className="btn-default" onClick={() => setIsOpenSearch(true)}>
          <FaSearch size={24} />
        </button>
      </div>

      {isOpenSearch && (
        <Search onCloseSearchOverlay={() => setIsOpenSearch(false)} />
      )}
    </>
  );
};
