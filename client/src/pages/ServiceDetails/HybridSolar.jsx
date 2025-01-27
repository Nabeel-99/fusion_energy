import React from "react";
import DetailService from "../../components/DetailService";
import { RiBatteryChargeFill } from "react-icons/ri";

const HybridSolar = () => {
  return (
    <DetailService
      icon={
        <RiBatteryChargeFill className="text-4xl lg:text-6xl text-[#d4863e]" />
      }
      header={"Hybrid Solar Systems"}
      subheader={"Integrated Energy Solutions for Maximum Efficiency"}
      description={
        "Our hybrid systems combine solar panels with energy storage solutions and grid connectivity to ensure consistent energy availability and reliability."
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

export default HybridSolar;
