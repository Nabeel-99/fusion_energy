import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { motion } from "motion/react";

const ClientsSection = () => {
  return (
    <div className="bg-[#f0ede77e]  p-10  pb-20 h-full w-full flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="2xl:container 2xl:mx-auto flex flex-col gap-10"
      >
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
                "Ever since Fusion Energy Solutions installed solar panels in my
                home, I’ve had stable electricity without worrying about high
                generator costs. Their service was excellent, and I recommend
                them to anyone looking to cut costs and enjoy reliable power."
              </p>
            </div>
          </div>
          <div className="bg-white lg:w-1/2 shadow-md p-6 rounded-xl flex flex-col gap-4">
            <BiSolidQuoteAltLeft className="text-5xl" />
            <div>
              <p className="text-lg font-bold">
                "Fusion Energy Solutions transformed our community with their
                solar streetlights and water pumps. We now have clean water and
                safe roads at night. They’ve truly changed our lives."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsSection;
