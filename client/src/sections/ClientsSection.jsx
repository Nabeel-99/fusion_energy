import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ClientsSection = () => {
  return (
    <div className="bg-[#f0ede77e]  p-10  pb-10 h-full w-full flex flex-col gap-10">
      <div className="2xl:container 2xl:mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-center text-3xl lg:text-7xl tracking-tight font-satoshi-bold pt-10">
            What Our Clients Say
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10   lg:px-20 w-full h-full overflow-x-scroll ">
          <div className="bg-white lg:w-1/2 shadow-md p-6 rounded-xl flex flex-col gap-4">
            <BiSolidQuoteAltLeft className="text-5xl" />
            <div>
              <p className="text-lg font-bold">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sit amet nulla auctor, vestibulum magna sed, convallis ex.
                Praesent quis nulla sit amet nulla rhoncus vestibulum.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Ut at sagittis augue.
                Praesent quis nulla sit amet nulla rhoncus vestibulum."
              </p>
            </div>
          </div>
          <div className="bg-white lg:w-1/2 shadow-md p-6 rounded-xl flex flex-col gap-4">
            <BiSolidQuoteAltLeft className="text-5xl" />
            <div>
              <p className="text-lg font-bold">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sit amet nulla auctor, vestibulum magna sed, convallis ex.
                Praesent quis nulla sit amet nulla rhoncus vestibulum.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Ut at sagittis augue.
                Praesent quis nulla sit amet nulla rhoncus vestibulum."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
