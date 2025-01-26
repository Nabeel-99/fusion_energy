import React from "react";
import ImageOne from "../assets/images/service.jpg";
const VisionSection = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:px-20 w-full justify-around pt-4  lg:pt-20 gap-10">
      <div className="lg:w-1/2 ">
        <img
          src={ImageOne}
          alt=""
          className="lg:w-[600px] object-cover lg:h-[600px] rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 lg:px-0 lg:w-1/2">
        <div className="text-3xl lg:text-5xl text-left font-satoshi-bold">
          Our Vision and Mission
        </div>
        <p className="text-left text-lg">
          At <span className="font-satoshi-bold">Fusion Energy Solutions</span>,
          we specialize in designing, installing, and maintaining cutting-edge
          solar energy systems. With a focus on residential, commercial,
          industrial, and utility-scale projects, we aim to deliver energy
          independence while fostering environmental sustainability.
        </p>
        <span className="text-left text-lg">
          <span className="font-satoshi-bold">Vision: </span>
          <span>
            {" "}
            To be a global leader in renewable energy by delivering innovative,
            affordable, and sustainable solar power solutions.
          </span>
        </span>{" "}
        <span className="text-left text-lg">
          <span className="font-satoshi-bold">Mission: </span>
          <span>
            {" "}
            To provide cutting-edge solar energy solutions, promote
            environmental conservation, and empower communities with reliable
            solar systems.
          </span>
        </span>{" "}
      </div>
    </div>
  );
};

export default VisionSection;
