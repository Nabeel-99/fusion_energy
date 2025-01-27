import React from "react";
import { FaBuilding, FaHome } from "react-icons/fa";
import { RiBatteryChargeFill } from "react-icons/ri";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { MdEngineering, MdSolarPower } from "react-icons/md";
import FrequentlyAskedSection from "../sections/FrequentlyAskedSection";
import ClientsSection from "../sections/ClientsSection";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Residential Solar Installations",
      text: "Bringing Affordable, Clean Energy to Your Home",
      icon: <FaHome className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />,
      link: "/services/residential-solar-installations",
    },
    {
      id: 2,
      title: "Commercial and Industrial Solar Solutions",
      text: "Customized Energy Solutions for Businesses",
      icon: (
        <FaBuilding className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
      ),
      link: "/services/industrial-solar-installations",
    },
    {
      id: 3,
      title: "Utility-Scale Solar Projects",
      text: "Transforming Communities with Renewable Energy",
      icon: (
        <MdSolarPower className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
      ),
      link: "/services/utility-scale-solar-projects",
    },
    {
      id: 4,
      title: "Hybrid Solar Systems",
      text: "Integrated Energy Solutions for Maximum Efficiency",
      icon: (
        <RiBatteryChargeFill className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
      ),
      link: "/services/hybrid-solar-systems",
    },
    {
      id: 5,
      title: "Solar Water Pumping Systems",
      text: "Affordable and Eco-Friendly Water Pumping for Agriculture",
      icon: (
        <FaArrowUpFromWaterPump className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
      ),
      link: "/services/solar-water-pumping-systems",
    },
    {
      id: 6,
      title: "Solar Street Lighting and Mini-Grids",
      text: "Reliable and Sustainable Energy for Urban and Rural Areas",
      icon: (
        <IoBulbOutline className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
      ),
      link: "/services/solar-street-lighting-and-mini-grids",
    },
    {
      id: 7,
      title: "Consultation and Maintenance Services",
      text: "Keeping Your Solar Systems at Peak Efficiency",
      icon: (
        <MdEngineering className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
      ),
      link: "/services/consultation-services",
    },
  ];
  return (
    <div className="flex flex-col gap-6 lg:gap-10 pt-10 h-full  lg:px-0 lg:pb-20 pb-10 ">
      <div className="flex flex-col gap-2 px-6">
        <div className="text-center font-satoshi-bold tracking-tight text-3xl lg:text-6xl px-4 lg:px-10">
          Powering Your Future{" "}
          <span className="lg:block"> with Solar Solutions</span>
        </div>
        <p className="text-center  text-lg lg:text-xl">
          From Installation to Maintenance – We’ve Got You Covered
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6 lg:px-20 2xl:container 2xl:mx-auto">
        {services.map((service) => (
          <div className="border border-[#d6d5d5] shadow-md bg-white rounded-xl p-6">
            <ServiceCard
              icon={service.icon}
              text={service.title}
              text2={service.text}
              showLink={true}
              to={service.link}
            />
          </div>
        ))}
      </div>
      <ClientsSection />
      <FrequentlyAskedSection />
    </div>
  );
};

export default Services;
