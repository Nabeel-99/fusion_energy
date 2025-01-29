import React, { useRef } from "react";
import ImageOne from "../assets/images/service.jpg";
import { useInView, motion } from "motion/react";
import FadeInEffect from "../components/FadeInEffect";

const VisionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

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
    <FadeInEffect>
      <div
        ref={sectionRef}
        className="flex lg:flex-row flex-col lg:px-32 w-full justify-around pt-4 lg:pt-20 gap-10"
      >
        <div className="lg:w-1/2 ">
          <img
            src={ImageOne}
            alt=""
            className="lg:w-[600px] object-cover lg:h-[600px] rounded-xl"
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-4 px-4 lg:px-0 lg:w-1/2"
        >
          <motion.div
            variants={itemVariants}
            className="text-3xl lg:text-5xl text-left font-satoshi-bold"
          >
            Our Vision and Mission
          </motion.div>
          <motion.p variants={itemVariants} className="text-left text-lg">
            At{" "}
            <span className="font-satoshi-bold">Fusion Energy Solutions</span>,
            we specialize in designing, installing, and maintaining cutting-edge
            solar energy systems. With a focus on residential, commercial,
            industrial, and utility-scale projects, we aim to deliver energy
            independence while fostering environmental sustainability.
          </motion.p>
          <motion.span variants={itemVariants} className="text-left text-lg">
            <span className="font-satoshi-bold">Vision: </span>
            <span>
              {" "}
              To be a global leader in renewable energy by delivering
              innovative, affordable, and sustainable solar power solutions.
            </span>
          </motion.span>{" "}
          <motion.span variants={itemVariants} className="text-left text-lg">
            <span className="font-satoshi-bold">Mission: </span>
            <span>
              {" "}
              To provide cutting-edge solar energy solutions, promote
              environmental conservation, and empower communities with reliable
              solar systems.
            </span>
          </motion.span>{" "}
        </motion.div>
      </div>
    </FadeInEffect>
  );
};

export default VisionSection;
