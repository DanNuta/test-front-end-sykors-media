import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

import { useWindowSize } from "../../hooks";

const MAX_MOBILE_SIZE = 1024;

export const Navbar = () => {
  const windowSize = useWindowSize();

  return windowSize <= MAX_MOBILE_SIZE ? <Mobile /> : <Desktop />;
};
