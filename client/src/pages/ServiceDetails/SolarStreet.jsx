import React from "react";
import DetailService from "../../components/DetailService";
import { IoBulbOutline } from "react-icons/io5";

const SolarStreet = () => {
  return (
    <DetailService
      icon={<IoBulbOutline className="text-4xl lg:text-6xl text-[#d4863e]" />}
      header={"Solar Street Lighting and Mini-Grids"}
      subheader={"Reliable and Sustainable Energy for Urban and Rural Areas"}
      description={
        "We provide solar streetlights and mini-grids to improve access to energy in underserved areas. These solutions offer long-term cost savings and energy efficiency."
      }
      workflow={["Site Survey", "Professional Installation", "System Check"]}
    />
  );
};

export default SolarStreet;
