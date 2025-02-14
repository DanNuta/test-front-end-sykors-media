import { FaBars, FaRocket, FaSearch } from "react-icons/fa";
import { useState } from "react";

import { NavItem } from "../NavItem";
import { Search } from "../Search";
import { LeftMenu } from "../LeftMenu";

import "./style.css";
import { EXTRA_LINKS } from "./utils";

export const Mobile = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);
  const [isExtendsExtraLinks, setIsExtendsExtraLinks] = useState(false);

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
        <LeftMenu
          showNavigationLinks
          renderExtraLinks={() => (
            <ul className="extra-links">
              <li
                className="d-flex justify-content-between align-items-center pointer"
                onClick={() => setIsExtendsExtraLinks((prev) => !prev)}
              >
                <FaRocket size={20} />
                <div>{isExtendsExtraLinks ? "+" : "-"}</div>
              </li>
              {isExtendsExtraLinks &&
                EXTRA_LINKS.map(({ name, children }) =>
                  Array.isArray(children) ? (
                    children.map(({ name }) => (
                      <NavItem
                        key={name}
                        label={name}
                        href={name}
                        className="extend"
                      />
                    ))
                  ) : (
                    <NavItem key={name} label={name} href={name} />
                  )
                )}
            </ul>
          )}
          onCloseLeftMenu={() => setIsOpenLeftMenu(false)}
        />
      )}
    </>
  );
};
