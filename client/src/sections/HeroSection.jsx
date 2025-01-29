import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
    <div className="flex flex-col gap-10 bg-img z-0 relative ">
      <div className="inset-0 absolute bg-black opacity-70" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=" 2xl:container  overflow-hidden  2xl:mx-auto"
      >
        <div className="absolute  text-white text-left flex flex-col  gap-6 items-center justify-center lg:items-start lg:justify-start xl:items-center pt-10 lg:pt-20 px-10 lg:px-20 h-full  w-full 2xl:w-auto">
          <motion.p
            variants={itemVariants}
            className="font-satoshi-bold text-5xl lg:text-7xl xl:text-8xl xl:text-center"
          >
            Fusion <span className="xl:block"> Energy Solutions</span>
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="lg:w-1/3 xl:text-xl xl:w-2/4 xl:text-center font-satoshi-bold"
          >
            {" "}
            Empowering communities and businesses with innovative solar energy
            solutions, driving sustainability, reducing energy costs, and
            shaping a brighter future.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col w-full xl:items-center gap-6 xl:flex-row xl:w-1/3"
          >
            <Link
              to={"/services"}
              className="border border-[#dca26c] p-2 lg:py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] text-white w-full lg:w-1/2 text-center rounded-xl"
            >
              Explore Services
            </Link>
            <Link
              to={"/contact"}
              className="border border-[#dca26c] p-2 lg:py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] text-white w-full lg:w-1/2 text-center rounded-xl"
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
