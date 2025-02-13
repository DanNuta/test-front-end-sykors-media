import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";

import { Search } from "../../Search";
import { LeftMenu } from "../../LeftMenu";

import "./style.css";

export const Mobile = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);
  return (
    <>
      <div>
        <button className="btn-default" onClick={() => setIsOpenLeftMenu(true)}>
          <FaBars size={24} />
        </button>
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

      {isOpenLeftMenu && (
        <LeftMenu onCloseLeftMenu={() => setIsOpenLeftMenu(false)} />
      )}
    </>
  );
};
