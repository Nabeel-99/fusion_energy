import React, { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import LargeNavbar from "./LargeNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const toggleMenu = () => setIsBurgerMenu(!isBurgerMenu);
  const closeMenu = () => setIsBurgerMenu(false);
  useEffect(() => {
    if (isBurgerMenu) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isBurgerMenu]);
  return (
    <header className="flex 2xl:container 2xl:mx-auto  items-center z-50 justify-between w-full  lg:p-2 lg:px-24">
      <LargeNavbar />
      <MobileNavbar toggleMenu={toggleMenu} isBurgerMenu={isBurgerMenu} />
      {isBurgerMenu && (
        <div className=" fixed z-50 top-20 right-0 w-full left-0 bottom-0 lg:hidden">
          <BurgerMenu closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
