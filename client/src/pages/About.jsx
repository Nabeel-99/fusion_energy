import React from "react";
import Solar from "../assets/images/solar.jpg";
import SolarPng from "../assets/images/solar3.png";
import { FaEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import ServiceCard from "../components/ServiceCard";
import { motion } from "motion/react";
import FadeInEffect from "../components/FadeInEffect";
const About = () => {
  return (
    <div className="flex flex-col gap-10 w-full pt-20 pb-10 h-full">
      <FadeInEffect translateY={40}>
        <div className="flex flex-col  2xl:container 2xl:mx-auto  lg:flex-row justify-between gap-10 px-6 lg:px-20">
          <div className="flex flex-col gap-4 lg:gap-2   lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl text-center lg:text-left lg:text-7xl font-satoshi-bold tracking-tight"
            >
              Who We Are
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-2 text-lg"
            >
              Fusion Energy Solutions is a trusted provider of cutting-edge
              solar energy solutions, committed to driving energy independence
              and sustainability. With expertise in residential, commercial, and
              utility-scale projects, we aim to revolutionize the way the world
              harnesses solar power.
            </motion.p>
            <div className="flex flex-col gap-2 px-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl font-satoshi-bold text-center lg:text-left"
              >
                Our Values
              </motion.div>
              <ul className="text-lg lg:text-xl px-3 font-satoshi-bold flex flex-col gap-4">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4"
                >
                  <span>
                    <GiCheckMark />
                  </span>
                  Expertise
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4"
                >
                  {" "}
                  <span>
                    <GiCheckMark />
                  </span>
                  Quality Assurance
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4"
                >
                  {" "}
                  <span>
                    <GiCheckMark />
                  </span>
                  Cost Efficiency
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4"
                >
                  {" "}
                  <span>
                    <GiCheckMark />
                  </span>
                  Customer Support
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4"
                >
                  {" "}
                  <span>
                    <GiCheckMark />
                  </span>
                  Sustainability Impact
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 order-first lg:order-none">
            <img src={Solar} alt="" className="object-cover rounded-xl" />
          </div>
        </div>
      </FadeInEffect>
      <div className="relative pt-20 lg:pt-0 w-full ">
        <img
          src={SolarPng}
          alt=""
          className="object-cover rounded-xl md:h-80 lg:h-96  w-full"
        />
        <div className="inset-0 absolute bg-gradient-to-t  from-white from-40% to-transparent " />
        <div className="absolute bottom-0 left-0 right-0   ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-10 px-6 lg:px-44   2xl:container 2xl:mx-auto "
          >
            <div className="border border-[#dedede] shadow-md p-6 lg:p-10 rounded-xl bg-white">
              <ServiceCard
                icon={
                  <FaEye className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text={"Our Vision"}
                text2={
                  "To lead the global transition to renewable energy with innovative, sustainable, and affordable solutions."
                }
                centerIcon={true}
              />
            </div>
            <div className="border border-[#dedede] shadow-md p-6 lg:p-10 rounded-xl bg-white">
              <ServiceCard
                icon={
                  <GiBullseye className="text-[2rem] lg:text-[3rem]  text-[#d4863e]" />
                }
                text={"Our Mission"}
                text2={
                  "To deliver reliable solar energy systems, promote environmental conservation, and empower communities with clean, sustainable energy."
                }
                centerIcon={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
