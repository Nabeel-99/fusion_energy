import React from "react";
import ServiceImage from "../assets/images/service.jpg";
import ContactForm from "./ContactForm";
import { GiCheckMark } from "react-icons/gi";
const DetailService = ({ icon, header, subheader, description, workflow }) => {
  return (
    <div className="flex flex-col gap-10 pt-10 pb-10 2xl:container 2xl:mx-auto">
      <div className="flex flex-col gap-10 px-6 lg:px-32">
        {icon}
        <div className="flex flex-col gap-2 ">
          <div className="text-4xl lg:text-7xl tracking-tight  xl:w-2/3  font-satoshi-bold">
            {header}
          </div>
          <p className="text-lg"> {subheader}</p>
        </div>
        <p className="text-xl lg:w-2/3">{description}</p>
        <div className="relative flex flex-col gap-10">
          <img
            src={ServiceImage}
            alt=""
            className="rounded-xl lg:h-[600px] w-full object-cover"
          />
          <div className="xl:absolute xl:right-10 xl:w-[40rem] shadow-md xl:-bottom-16">
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col gap-10 pt-20">
          <p className="font-satoshi-bold text-3xl lg:text-4xl">Our Workflow</p>
          <ul className="text-xl flex flex-col gap-4">
            {workflow.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span>
                  <GiCheckMark />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
