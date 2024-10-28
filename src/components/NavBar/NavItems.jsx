import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ items }) => {
  return (
    <>
      <ul className="flex flex-col gap-9 md:gap-[30px] items-center  md:flex-row dark:text-white  ">
        {items.map((ele, ind) =>
          ele == "Newsletter" ? (
            <li key={ind} className="font-normal text-lg lg:text-xl ">
              <NavLink to="/newsletter">{ele}</NavLink>
            </li>
          ) : (
            <li key={ind} className="font-normal text-lg lg:text-xl   ">
              <NavLink to="/">{ele}</NavLink>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavItems;
