import { Navbar } from "./components";
import { Blog } from "./features";

import "./styles/reset.css";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <Blog />
    </div>
  );
}

export default App;
