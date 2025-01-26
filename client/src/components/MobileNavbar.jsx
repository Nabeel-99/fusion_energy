import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
const MobileNavbar = ({ toggleMenu, isBurgerMenu }) => {
  return (
    <div className="flex items-center px-4 lg:hidden backdrop-blur-3xl z-50 pb-2 bg-[#ffffff6b] justify-between w-full  fixed left-0 right-0 top-0 pt-4">
      <div className="font-satoshi-bold text-xl">UFI Solutions</div>
      <div className=" lg:hidden">
        <button
          onClick={toggleMenu}
          className="border p-2 rounded-xl bg-[#d4863e] text-white"
        >
          {isBurgerMenu ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <CiMenuFries className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
