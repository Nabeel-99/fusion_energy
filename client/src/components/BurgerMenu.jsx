import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className="bg-white h-full  z-50 flex py-4 flex-col items-start px-4 gap-4">
      <ul className="flex flex-col pt-4   justify-start items-start gap-6  ">
        <Link onClick={closeMenu} to={"/"}>
          <li>HOME</li>
        </Link>
        <Link onClick={closeMenu} to={"/services"}>
          {" "}
          <li>SERVICES</li>
        </Link>
        <Link onClick={closeMenu} to={"/about"}>
          <li>ABOUT</li>
        </Link>
        {/* <Link to={"/"}>
          <li>BLOG</li>
        </Link> */}
      </ul>
      <Link
        onClick={closeMenu}
        to={"/contact"}
        className="flex items-center pt-2 justify-center"
      >
        CONTACT US
      </Link>
    </div>
  );
};

export default BurgerMenu;
