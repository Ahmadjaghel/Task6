import { useState } from "react";
import lightMode from "./assets/imgs/lightMode.png";
import darkMode from "./assets/imgs/darkMode.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Newsletter from "./Pages/Newsletter";
import Footer from "./components/Footer/Footer";
function App() {
  // const [count, setCount] = useState(0);
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  const navData = ["Blog", "Projects", "About", "Newsletter"];
  const menu = () => <IoMenu size={32} className="dark:text-white" />;
  const close = () => <IoClose size={32} className="dark:text-white" />;
  return (
    <div
      className={`${
        (mode == false) | (mode == "false") ? `dark` : null
      } bg-white dark:bg-myprimary`}
    >
      <NavBar
        menu={menu}
        close={close}
        items={navData}
        lightMode={lightMode}
        darkMode={darkMode}
        mode={mode}
        setMode={setMode}
      />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog/:IdItem" Component={Blog} />
        <Route path="/newsletter" Component={Newsletter} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
