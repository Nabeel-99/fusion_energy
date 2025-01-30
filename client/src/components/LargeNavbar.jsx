import React from "react";
import { Link } from "react-router-dom";

const LargeNavbar = () => {
  return (
    <>
      <div className="hidden lg:flex">
        {" "}
        <Link to={"/"} className="text-2xl px-6">
          UFI Solutions
        </Link>
      </div>
      <div className=" gap-6 hidden lg:flex">
        <ul className="flex gap-10 ">
          <Link to={"/"}>
            <li>HOME</li>
          </Link>
          <Link to={"/services"}>
            <li>SERVICES</li>
          </Link>
          <Link to={"/about"}>
            <li>ABOUT</li>
          </Link>

          {/* <li>SERVICES</li>
          <li>ABOUT</li> */}
          {/* <li>BLOG</li> */}
          <li></li>
          <li></li>
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
    </>
  );
};

export default LargeNavbar;
