import {
  FaTimes,
  FaSun,
  FaMoon,
  FaDesktop,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { NavItem } from "../NavItem";

import { TitleLinkList } from "./TitleLinkList";
import "./style.css";

type Props = {
  onCloseLeftMenu: () => void;
  renderExtraLinks: () => React.ReactNode;
  showNavigationLinks?: boolean;
};

const MODE = [
  <FaSun size={20} />,
  <FaMoon size={20} />,
  <FaDesktop size={20} />,
];

const SOCIAL_MEDIA = [
  <FaFacebookF size={16} />,
  <FaInstagram size={16} />,
  <FaTwitter size={16} />,
  <FaLinkedin size={16} />,
  <FaYoutube size={16} />,
];

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
  { id: 10, name: "CES 2025 AWARDS" },
];

export const LeftMenu = ({
  onCloseLeftMenu,
  renderExtraLinks,
  showNavigationLinks,
}: Props) => {
  return (
    <div className="left-menu-overlay">
      <div className="left-menu-content">
        <div className="logo-close-menu">
          <button
            className="btn-default left-menu-close-btn"
            onClick={onCloseLeftMenu}
          >
            <FaTimes size={24} />
          </button>

          <div className="left-menu-logo">LOGO</div>
        </div>

        <div className="left-content-body">
          {showNavigationLinks && (
            <ul className="main-links">
              {LINKS.map(({ id, name }) => (
                <NavItem label={name} href={name} key={id} />
              ))}
            </ul>
          )}

          {renderExtraLinks()}

          <div className="mode">
            <TitleLinkList title="MODE" list={MODE} />
          </div>

          <TitleLinkList
            title="FOLLOW US"
            list={SOCIAL_MEDIA}
            render={(item, idx) => (
              <NavItem
                key={idx}
                className="social-media-circle"
                label={item}
                href="#"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
