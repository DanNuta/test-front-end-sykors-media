import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

import "./style.css";

import { useWindowSize } from "../../hooks";

const MAX_MOBILE_SIZE = 1024;

export const Navbar = () => {
  const windowSize = useWindowSize();

  return (
    <div className="border-b">
      <div className="navbar | d-flex justify-content-between align-items-center">
        {windowSize <= MAX_MOBILE_SIZE ? <Mobile /> : <Desktop />}
      </div>
    </div>
  );
};
