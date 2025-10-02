import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
const MobileNavbar = ({ toggleMenu, isBurgerMenu }) => {
  return (
    <nav
      className="flex items-center px-4 lg:hidden backdrop-blur-3xl z-50  bg-white justify-between w-full  fixed left-0 right-0 top-0  p-2"
      aria-label="Mobile Primary"
    >
      <Link to={"/"} className="" aria-label="Go to home">
        <img
          src={logo}
          alt="Fusion Energy logo"
          className=" w-12 h-12 object-contain"
        />
      </Link>
      <div className=" lg:hidden">
        <button
          onClick={toggleMenu}
          className="border p-2 rounded-xl bg-[#d4863e] text-white"
          aria-label={isBurgerMenu ? "Close menu" : "Open menu"}
        >
          {isBurgerMenu ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <CiMenuFries className="text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
