import React from "react";
import DetailService from "../../components/DetailService";
import { MdEngineering } from "react-icons/md";

const Consultation = () => {
  return (
    <DetailService
      icon={<MdEngineering className="text-4xl lg:text-6xl text-[#d4863e]" />}
      header={"Consultation and Maintenance Services"}
      subheader={"Keeping Your Solar Systems at Peak Efficiency"}
      description={
        "We offer professional consulting and maintenance services to ensure your solar systems operate smoothly. From troubleshooting to system upgrades, we’ve got you covered"
      }
      workflow={[
        "System Review",
        "Problem-Solving",
        "Upgrade Planning",
        "Maintenance",
      ]}
    />
  );
};

export default Consultation;
