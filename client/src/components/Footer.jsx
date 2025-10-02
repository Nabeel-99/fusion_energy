import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#bd742f] p-20 lg:px-20 text-white flex lg:flex-row flex-col gap-10 items-start lg:items-baseline justify-between ">
      <div className="2xl:container 2xl:mx-auto flex w-full justify-between lg:px-20 lg:flex-row flex-col gap-10">
        <div className="font-satoshi-bold flex gap-4 flex-col items-start  lg:items-center  text-xl">
          <div className="bg-white border rounded-full p-8 w-44 h-44 flex items-center justify-center overflow-hidden">
            <img src="/logo.jpeg" alt="logo" className="object-contain" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-start lg:items-baseline  font-satoshi-bold gap-10">
          <div className="flex flex-col gap-2">
            <span className="pb-4">Quick Links</span>
            <ul className="flex flex-col gap-2">
              <Link
                to={"/"}
                className="transition duration-300 hover:text-[#50392d]"
              >
                Home{" "}
              </Link>
              <Link
                className="transition duration-300 hover:text-[#50392d]"
                to={"/services"}
              >
                <li>Services</li>
              </Link>
              <Link
                className="transition duration-300 hover:text-[#50392d]"
                to={"/about"}
              >
                <li>About</li>
              </Link>
              <Link
                className="transition duration-300 hover:text-[#50392d]"
                to={"/contact"}
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="pb-4">Contact Us</div>

            <Link to={"mailto:fusionenergyng@gmail.com"}>
              Email: fusionenergyng@gmail.com
            </Link>
            <div>Phone: +234 803 123 4567</div>
            <div>Address: Wuse 2, Abuja.</div>

            <Link>
              {" "}
              <FaInstagram className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
