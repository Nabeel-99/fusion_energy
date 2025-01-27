import React from "react";
import Solar from "../assets/images/solar.jpg";
import SolarPng from "../assets/images/solar3.png";
import { FaEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import ServiceCard from "../components/ServiceCard";
const About = () => {
  return (
    <div className="flex flex-col gap-10 w-full pt-20 pb-10 h-full">
      <div className="flex flex-col  2xl:container 2xl:mx-auto  lg:flex-row justify-between gap-10 px-6 lg:px-20">
        <div className="flex flex-col gap-4 lg:gap-2   lg:w-1/2">
          <p className="text-4xl text-center lg:text-left lg:text-7xl font-satoshi-bold tracking-tight">
            Who We Are
          </p>
          <p className="px-2 text-lg">
            Fusion Energy Solutions is a trusted provider of cutting-edge solar
            energy solutions, committed to driving energy independence and
            sustainability. With expertise in residential, commercial, and
            utility-scale projects, we aim to revolutionize the way the world
            harnesses solar power.
          </p>
          <div className="flex flex-col gap-2 px-1">
            <div className="text-xl font-satoshi-bold text-center lg:text-left">
              Our Values
            </div>
            <ul className="text-lg lg:text-xl px-3 font-satoshi-bold flex flex-col gap-4">
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
        </div>
        <div className="lg:w-1/2 order-first lg:order-none">
          <img src={Solar} alt="" className="object-cover rounded-xl" />
        </div>
      </div>
      <div className="relative pt-20 lg:pt-0 w-full ">
        <img
          src={SolarPng}
          alt=""
          className="object-cover rounded-xl md:h-80 lg:h-96  w-full"
        />
        <div className="inset-0 absolute bg-gradient-to-t  from-white from-40% to-transparent " />
        <div className="absolute bottom-0 left-0 right-0   ">
          <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-44   2xl:container 2xl:mx-auto ">
            <div className="border border-[#dedede] shadow-md p-6 lg:p-10 rounded-xl bg-white">
              <ServiceCard
                icon={
                  <FaEye className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text={"Our Vision"}
                text2={
                  "To lead the global transition to renewable energy with innovative, sustainable, and affordable solutions."
                }
                centerIcon={true}
              />
            </div>
            <div className="border border-[#dedede] shadow-md p-6 lg:p-10 rounded-xl bg-white">
              <ServiceCard
                icon={
                  <GiBullseye className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text={"Our Mission"}
                text2={
                  "To deliver reliable solar energy systems, promote environmental conservation, and empower communities with clean, sustainable energy."
                }
                centerIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
