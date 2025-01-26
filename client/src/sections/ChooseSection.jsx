import React from "react";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

const ChooseSection = () => {
  return (
    <div className="flex flex-col gap-10 bg-img-choose z-20 relative ">
      <div className="inset-0 absolute bg-black opacity-60" />
      <div className="2xl:container 2xl:mx-auto 2xl:overflow-hidden">
        <div className="absolute text-white text-left flex flex-col lg:flex-row  gap-10 pt-22 lg:pt-20 px-10 lg:px-20 h-full   w-full 2xl:w-auto">
          <div className="flex flex-col gap-4  lg:w-full">
            <p className="font-satoshi-bold text-4xl lg:text-7xl">
              Why Choose Us?
            </p>
            <ul className="text-xl lg:text-3xl px-3 font-satoshi-bold flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span>
                  <GiCheckMark />
                </span>
                Expertise
              </li>
              <li className="flex items-center gap-4">
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Quality Assurance
              </li>
              <li className="flex items-center gap-4">
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Cost Efficiency
              </li>
              <li className="flex items-center gap-4">
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Customer Support
              </li>
              <li className="flex items-center gap-4">
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Sustainability Impact
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center  w-full 2xl:w-auto">
            <Link
              to={"/contact"}
              className="border bg-[#d4863e] w-full lg:w-auto 2xl:w-full text-center text-xl border-[#dca26c] rounded-xl p-3 font-satoshi-bold lg:text-2xl py-4 px-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
