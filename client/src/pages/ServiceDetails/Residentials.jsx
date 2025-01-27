import React from "react";
import DetailService from "../../components/DetailService";
import { FaHome } from "react-icons/fa";

const Residentials = () => {
  return (
    <DetailService
      icon={<FaHome className="text-4xl lg:text-6xl text-[#d4863e]" />}
      header={"Residential Solar Installations"}
      subheader={"Bringing Affordable, Clean Energy to Your Home"}
      description={
        "Our residential solar installations are designed to provide you with a reliable and efficient source of clean energy. With our expert team and top-of-the-line equipment, you can trust that your solar installation will be done right the first time."
      }
      workflow={[
        "Free Consultation",
        "On-Site Assessment",
        "Professional Installation",
      ]}
    />
  );
};

export default Residentials;
