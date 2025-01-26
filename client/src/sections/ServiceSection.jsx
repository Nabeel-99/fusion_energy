import React from "react";
import { FaHome } from "react-icons/fa";
import VisionSection from "./VisionSection";
import GridIcon from "../components/GridIcon";
import { FaBuilding } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { RiBatteryChargeFill } from "react-icons/ri";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <div className="flex flex-col 2xl:container 2xl:mx-auto justify-around pb-10  w-full h-full">
      <VisionSection />
      <div className="flex lg:flex-row flex-col px-4 lg:px-20 w-full justify-around pt-4  lg:pt-20 gap-10">
        <div className="lg:w-1/2 text-left flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-satoshi-bold text-3xl lg:text-6xl">
              Our Services
            </p>
            <p className="text-lg">
              Our company provides innovative solar energy solutions tailored to
              meet the diverse needs of homes, businesses, and communities,
              empowering a sustainable future.
            </p>
          </div>

          <div className="flex items-center xl:w-1/2">
            <Link className="border border-[#dca26c] p-2 py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] text-white w-full px-10 text-center rounded-xl">
              View All Services
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:w-1/2">
          <GridIcon
            icon={
              <FaHome className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Residential Solar Installations"
          />
          <GridIcon
            icon={
              <MdEngineering className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Consultation and Maintenance Services"
          />
          <GridIcon
            icon={
              <FaBuilding className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Commercial Solar and Industrial Solar Solutions"
          />
          <GridIcon
            icon={
              <MdSolarPower className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Utility-Scale Solar Projects"
          />
          <GridIcon
            icon={
              <RiBatteryChargeFill className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Hybrid Solar Systems"
          />
          <GridIcon
            icon={
              <FaArrowUpFromWaterPump className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Solar Water Pumping Systems"
          />
          <GridIcon
            icon={
              <IoBulbOutline className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
            }
            text="Solar Street Lighting and Mini-Grids"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
