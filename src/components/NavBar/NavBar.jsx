import React, { useState } from "react";
import NavItems from "./NavItems";

const NavBar = ({ items, menu, close, lightMode, darkMode, mode, setMode }) => {
  function showMenu() {
    const menu = document.querySelector(".ulmenu");
    menu.classList.toggle("translate-x-full");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("bg-white");
    nav.classList.toggle("bg-nav");
    setActive(!active);
  }
  const changMode = () => {
    const current = !mode;
    setMode(current);
    localStorage.setItem("mode", current);
  };
  const [active, setActive] = useState(true);
  return (
    <div className="sticky top-0 w-full z-30 bg-white dark:bg-myprimary   mb-5 md:mb-[30px] lg:mb-5">
      <nav className="nav flex justify-between  items-center  h-[72px] md:h-20 lg:h-[120px] px-5 lg:px-28 ">
        <p className=" font-semibold text-lg lg:text-xl dark:text-white ">
          Your Name
        </p>
        <div className="hidden md:flex md:gap-[22px]">
          <NavItems items={items} />
          <button className="hidden md:block ">
            {(mode == true) | (mode == "true") ? (
              <img src={lightMode} onClick={changMode} />
            ) : (
              <img src={darkMode} onClick={changMode} />
            )}
          </button>
        </div>
        <button className="md:hidden " onClick={showMenu}>
          {menu()}
        </button>
      </nav>
      <div className="ulmenu md:hidden flex flex-col items-center gap-[22.63vh] pb-5 justify-end translate-x-full  fixed top-0 w-full h-screen transition-all transition-100 bg-white dark:bg-myprimary ">
        <div className="flex flex-col">
          <p className=" font-semibold text-lg mb-[54px] dark:text-white ">
            Your Name
          </p>
          <NavItems items={items} />
          <button className="mx-auto w-fit mt-[22px] ">
            {mode ? (
              <img src={lightMode} onClick={changMode} />
            ) : (
              <img src={darkMode} onClick={changMode} />
            )}
          </button>
        </div>
        <button onClick={showMenu}>{close()}</button>
      </div>
    </div>
  );
};

export default NavBar;
