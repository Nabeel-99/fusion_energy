import React from "react";
import DetailService from "../../components/DetailService";
import { MdSolarPower } from "react-icons/md";

const UtilityScale = () => {
  return (
    <DetailService
      icon={<MdSolarPower className="text-4xl lg:text-6xl text-[#d4863e]" />}
      header={"Utility-Scale Solar Projects"}
      subheader={"Transforming Communities with Renewable Energy"}
      description={
        "We specialize in planning, developing, and implementing utility-scale solar farms that deliver large-scale energy solutions for communities, businesses, and governments."
      }
      workflow={[
        "Permitting and Approvals",
        "On-Site Assessment",
        "Professional Installation",
        "Commissioning and Handover",
      ]}
    />
  );
};

export default UtilityScale;
