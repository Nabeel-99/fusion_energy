import React from "react";
import DetailService from "../../components/DetailService";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";

const SolarWater = () => {
  return (
    <DetailService
      icon={
        <FaArrowUpFromWaterPump className="text-4xl lg:text-6xl text-[#d4863e]" />
      }
      header={"Solar Water Pumping Systems"}
      subheader={"Affordable and Eco-Friendly Water Pumping for Agriculture"}
      description={
        "Our solar-powered water pumps are designed to meet the irrigation needs of farmers and rural communities. These systems are efficient, affordable, and environmentally sustainable."
      }
      workflow={[
        "System Design",
        "Professional Installation",
        "System Testing",
        "Maintenance",
      ]}
    />
  );
};

export default SolarWater;
