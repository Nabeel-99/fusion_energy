import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import solarBG from "../assets/images/solarBG.jpg";
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className="flex flex-col gap-10 border lg:py-20 z-0 relative ">
      <div className="absolute inset-0">
        <img src={solarBG} alt="" className="w-full h-full  object-cover" />
      </div>
      <div className="absolute inset-0 bg-black z-0 opacity-80" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative py-10 2xl:container  overflow-hidden  2xl:mx-auto"
      >
        <div className="z-40  text-white text-left flex flex-col  gap-6 justify-center  items-center  px-10 lg:px-20 h-full  w-full 2xl:w-auto">
          <motion.p
            variants={itemVariants}
            className="font-satoshi-bold text-5xl lg:text-7xl xl:text-8xl xl:text-center"
          >
            Fusion <span className="xl:block"> Energy Solutions</span>
          </motion.p>
          <motion.p
            variants={itemVariants}
            className=" md:text-center text-white/90 text-lg md:text-2xl font-satoshi-bold xl:max-w-3xl"
          >
            {" "}
            Empowering communities and businesses with innovative solar energy
            solutions, driving sustainability, reducing energy costs, and
            shaping a brighter future.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col w-full md:items-center justify-center gap-6 md:flex-row max-w-3xl"
          >
            <Link
              to={"/services"}
              className="border border-[#dca26c] p-2 lg:py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] hover:bg-[#e1a356] transition duration-300 text-white w-full  text-center rounded-xl"
            >
              Explore Services
            </Link>
            <Link
              to={"/contact"}
              className="border border-[#dca26c] p-2 lg:py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] hover:bg-[#e1a356] transition duration-300 text-white w-full  text-center rounded-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
