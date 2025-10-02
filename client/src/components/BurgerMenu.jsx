import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const BurgerMenu = ({ closeMenu }) => {
  return (
    <nav
      className="bg-white h-full  z-50 flex py-4 flex-col items-start px-4 gap-4"
      aria-label="Mobile Primary"
    >
      <ul className="flex flex-col pt-4   justify-start items-start gap-6  ">
        <li>
          <Link onClick={closeMenu} to={"/"}>
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              HOME
            </motion.span>
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to={"/services"}>
            {" "}
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SERVICES
            </motion.span>
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to={"/about"}>
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ABOUT
            </motion.span>
          </Link>
        </li>
      </ul>
      <div className="flex items-center pt-2 justify-center">
        <Link onClick={closeMenu} to={"/contact"}>
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            CONTACT US
          </motion.span>
        </Link>
      </div>
    </nav>
  );
};

export default BurgerMenu;
