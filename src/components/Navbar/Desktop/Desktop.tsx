import { FaSearch, FaBars, FaSun } from "react-icons/fa";
import React, { useState } from "react";

import { NavItem } from "../../NavItem";
import { Search } from "../../Search";
import { LeftMenu } from "../../LeftMenu";

import { EXTRA_LINKS } from "../utils";

import "./style.css";

const LINKS = [
  { id: 1, name: "HOME" },
  { id: 2, name: "LATEST" },
  { id: 3, name: "TECH" },
  { id: 4, name: "REVIEWS" },
  { id: 5, name: "SCIENCE" },
  { id: 6, name: "IO9" },
  { id: 7, name: "AI" },
  { id: 8, name: "VIDEO" },
  { id: 9, name: "DEALS" },
];

export const Desktop = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenExtraMenu, setIsOpenExtraMenu] = useState(false);
  const [isExtendsExtraLinks, setIsExtendsExtraLinks] = useState(false);

  return (
    <>
      <div className="navbar-desktop | d-flex align-items-center gap-16">
        <div className="navbar-desktop-logo">LOGO</div>
        <div
          onClick={() => setIsOpenSearch(true)}
          className="d-flex align-items-center gap-16 pointer"
        >
          SEARCH
          <FaSearch size={16} />
        </div>
      </div>
      <div>
        <ul className="d-flex align-items-center gap-16">
          {LINKS.map(({ id, name }) => (
            <NavItem key={id} href={name} label={name} />
          ))}
          <NavItem
            href="#"
            label="CES 2025 Awards"
            className="highlight-link"
          />
        </ul>
      </div>
      <div>
        <div className="d-flex align-items-center gap-16">
          <FaSun size={16} />
          <button
            onClick={() => setIsOpenExtraMenu(true)}
            className="btn-default"
          >
            <FaBars size={16} />
          </button>
        </div>
      </div>

      {isOpenSearch && (
        <Search onCloseSearchOverlay={() => setIsOpenSearch(false)} />
      )}

      {isOpenExtraMenu && (
        <LeftMenu
          renderExtraLinks={() => (
            <ul className="extra-links">
              {EXTRA_LINKS.map(({ name, children }) =>
                Array.isArray(children) ? (
                  <React.Fragment key={name}>
                    <li
                      className="d-flex justify-content-between align-items-center pointer"
                      onClick={() => setIsExtendsExtraLinks((prev) => !prev)}
                    >
                      <span>{name}</span> {isExtendsExtraLinks ? "+" : "-"}
                    </li>
                    {isExtendsExtraLinks &&
                      children.map(({ name }) => (
                        <NavItem
                          key={name}
                          label={name}
                          href={name}
                          className="extend"
                        />
                      ))}
                  </React.Fragment>
                ) : (
                  <NavItem key={name} label={name} href={name} />
                )
              )}
            </ul>
          )}
          onCloseLeftMenu={() => setIsOpenExtraMenu(false)}
        />
      )}
    </>
  );
};
