import React from "react";
import DetailService from "../../components/DetailService";
import { FaBuilding } from "react-icons/fa";

const Industrial = () => {
  return (
    <DetailService
      icon={<FaBuilding className="text-4xl lg:text-6xl text-[#d4863e]" />}
      header={"Commercial and Industrial Solar Solutions"}
      subheader={" Power Your Business with Solar"}
      description={
        "Our commercial solar solutions are designed to reduce energy costs and improve operational efficiency for businesses. From small shops to large industrial facilities, we provide tailored solar energy systems that align with your goals."
      }
      workflow={[
        "Free Consultation",
        "On-Site Assessment",
        "Professional Installation",
      ]}
    />
  );
};

export default Industrial;
