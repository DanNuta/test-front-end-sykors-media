import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

import "./style.css";

type Props = {
  onCloseSearchOverlay: () => void;
};

export const Search = ({ onCloseSearchOverlay }: Props) => {
  return createPortal(
    <div className="search-overlay | d-flex align-items-center justify-content-center">
      <div className="search-input">
        <input className="search-input" type="text" placeholder="SEARCH" />
      </div>

      <button
        className="search-close-btn | btn-default"
        onClick={onCloseSearchOverlay}
      >
        <FaTimes color="white" size={24} />
      </button>
    </div>,
    document.body
  );
};
