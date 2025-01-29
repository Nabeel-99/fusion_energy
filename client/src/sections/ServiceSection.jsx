import React, { useRef } from "react";
import { FaHome } from "react-icons/fa";
import VisionSection from "./VisionSection";
import GridIcon from "../components/GridIcon";
import { FaBuilding } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { RiBatteryChargeFill } from "react-icons/ri";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";
import { Link } from "react-router-dom";
import FadeInEffect from "../components/FadeInEffect";
import { useInView, motion } from "motion/react";

const ServiceSection = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-20%" });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className="flex flex-col 2xl:container 2xl:mx-auto justify-around pb-10  w-full h-full">
      <VisionSection />
      <FadeInEffect translateY={40}>
        <div className="flex lg:flex-row flex-col px-4 lg:px-32 w-full justify-around pt-4  lg:pt-20 gap-10">
          <div className="lg:w-1/2 text-left flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-satoshi-bold text-3xl lg:text-6xl"
              >
                Our Services
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg"
              >
                Our company provides innovative solar energy solutions tailored
                to meet the diverse needs of homes, businesses, and communities,
                empowering a sustainable future.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center xl:w-1/2"
            >
              <Link
                to={"/services"}
                className="border border-[#dca26c] p-2 py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] text-white w-full px-10 text-center rounded-xl"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
          <motion.div
            ref={gridRef}
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 gap-10 lg:w-1/2"
          >
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <FaHome className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Residential Solar Installations"
                to={"/services/residential-solar-installations"}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <MdEngineering className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Consultation and Maintenance Services"
                to={"/services/consultation-services"}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <FaBuilding className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Commercial and Industrial Solar Solutions"
                to={"/services/industrial-solar-installations"}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <MdSolarPower className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Utility-Scale Solar Projects"
                to={"/services/utility-scale-solar-projects"}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <RiBatteryChargeFill className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Hybrid Solar Systems"
                to={"/services/hybrid-solar-systems"}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <FaArrowUpFromWaterPump className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Solar Water Pumping Systems"
                to={"/services/solar-water-pumping-systems"}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <GridIcon
                icon={
                  <IoBulbOutline className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text="Solar Street Lighting and Mini-Grids"
                to={"/services/solar-street-lighting-and-mini-grids"}
              />
            </motion.div>
          </motion.div>
        </div>
      </FadeInEffect>
    </div>
  );
};

export default ServiceSection;
