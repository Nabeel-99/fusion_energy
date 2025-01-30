import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className="bg-white h-full  z-50 flex py-4 flex-col items-start px-4 gap-4">
      <ul className="flex flex-col pt-4   justify-start items-start gap-6  ">
        <Link onClick={closeMenu} to={"/"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            HOME
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/services"}>
          {" "}
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SERVICES
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/about"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            ABOUT
          </motion.li>
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
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          CONTACT US
        </motion.span>
      </Link>
    </div>
  );
};

export default BurgerMenu;
