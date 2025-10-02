import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
const LargeNavbar = () => {
  return (
    <nav
      className="hidden lg:flex items-center w-full justify-between gap-8"
      aria-label="Primary"
    >
      <div className="hidden lg:flex">
        {" "}
        <Link to={"/"} className="" aria-label="Go to home">
          <img
            src={logo}
            alt="Fusion Energy logo"
            className=" w-16 h-16 object-contain"
          />
        </Link>
      </div>
      <div className=" gap-6 hidden lg:flex">
        <ul className="flex gap-10 ">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/services"}>SERVICES</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Link
          to={"/contact"}
          className="border p-2 bg-[#d4863e] px-4 hover:bg-[#e1a356] transition duration-300 text-white rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default LargeNavbar;
