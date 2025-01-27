import React from "react";
import ExpertOne from "../assets/images/expert1.jpg";
import ExpertTwo from "../assets/images/expert2.jpg";
import ExpertThree from "../assets/images/expert3.jpg";
import BulletPoint from "../components/BulletPoint";
const ExpertiseSection = () => {
  return (
    <div className="flex lg:flex-row flex-col  pb-10 bg-[#f6f2ec] w-full justify-between pt-4  lg:pt-20 gap-10">
      <div className="2xl:container 2xl:mx-auto px-2 flex flex-col lg:flex-row gap-10 pt-20 pb-10 justify-between w-full">
        <div className="w-full flex flex-col gap-10 lg:w-1/2  ">
          <div className="flex lg:px-20 flex-col items-center lg:items-baseline gap-4">
            <img
              src={ExpertOne}
              alt=""
              className="max-w-44 max-h-44 rounded-xl   lg:translate-x-20 lg:w-96 object-cover lg:h-72 lg:max-h-72 lg:max-w-96"
            />
            <div className="flex gap-6">
              <img
                src={ExpertTwo}
                alt=""
                className="max-w-32 max-h-32 rounded-xl lg:w-64 object-cover lg:h-80 lg:max-h-80 lg:max-w-64"
              />
              <img
                src={ExpertThree}
                alt=""
                className="max-w-44 max-h-44 rounded-xl xl:w-80 object-cover xl:h-96 xl:max-h-96 xl:max-w-80"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 lg:pr-20 w-full  lg:w-1/2 ">
          <p className="text-3xl lg:text-5xl font-satoshi-bold text-left">
            Leading the Way in Solar Technology
          </p>
          <p className="text-lg">
            Expert solar solutions, backed by experience and technology. We
            design systems that deliver real results—efficient, reliable, and
            tailored for your needs.
          </p>
          <div className="flex flex-col gap-6">
            <BulletPoint
              number={"1"}
              title={"Experienced Team"}
              description={"Highly skilled engineers and energy consultants."}
            />
            <BulletPoint
              number={"2"}
              title={"Tailored Solutions"}
              description={"Customized to your energy needs."}
            />
            <BulletPoint
              number={"3"}
              title={"Sustainability Focus"}
              description={"Commitment to eco-friendly solutions."}
            />
            <BulletPoint
              number={"4"}
              title={"Cutting-Edge Technology"}
              description={"Advanced solar panels and inverters."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
