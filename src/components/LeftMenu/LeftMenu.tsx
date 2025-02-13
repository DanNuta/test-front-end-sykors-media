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

import "./style.css";

type Props = {
  onCloseLeftMenu: () => void;
};

export const LeftMenu = ({ onCloseLeftMenu }: Props) => {
  return (
    <div className="left-menu-overlay">
      <div className="left-menu-content">
        <button
          className="btn-default left-menu-close-btn"
          onClick={onCloseLeftMenu}
        >
          <FaTimes size={24} />
        </button>

        <div className="left-menu-logo">LOGO</div>

        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="standalone">
            <div>MODE</div>
            <ul className="d-flex justify-content-center align-items-center">
              <li>
                <a href="">
                  <FaSun size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaMoon size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaDesktop size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div className="standalone">
            <div>Follow us</div>
            <ul className="d-flex justify-content-center align-items-center">
              <li>
                <a href="">
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
