import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#bd742f] p-20 lg:px-20 text-white flex lg:flex-row flex-col gap-10 items-start lg:items-baseline justify-around ">
      <div className="2xl:container 2xl:mx-auto text-white flex lg:flex-row flex-col gap-10 items-start lg:items-baseline justify-around">
        <div className="font-satoshi-bold flex gap-4 flex-col items-center lg:items-baseline text-xl">
          UFI Solutions
          <div className="text-center">
            <FaInstagram className="text-3xl" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-start lg:items-baseline  font-satoshi-bold gap-10">
          <div className="flex flex-col gap-2">
            <span className="pb-4">Quick Links</span>
            <ul className="flex flex-col gap-2">
              <Link to={"/"}>Home </Link>
              <Link to={"/services"}>
                <li>Services</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="pb-4">Contact Us</div>

            <Link>Email: ufi@gmail.com</Link>
            <div>Phone: +234 803 123 4567</div>
            <div>Address: Wuse 2, Abuja.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
