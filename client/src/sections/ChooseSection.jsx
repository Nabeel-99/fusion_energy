import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
import { useInView, motion } from "motion/react";
import chooseBg from "../assets/images/solar2.jpg";
const ChooseSection = () => {
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
    <div className="flex flex-col gap-10 w-full  relative  py-20">
      <div className="absolute inset-0">
        <img src={chooseBg} alt="" className="w-full h-full  object-cover" />
      </div>
      <div className="absolute inset-0 bg-black z-0 opacity-60" />
      <div className="2xl:container 2xl:mx-auto 2xl:overflow-hidden w-full">
        <motion.div
          ref={sectionRef}
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-50 text-white text-left flex flex-col items-center justify-center gap-14 pt-22 lg:pt-0 px-10 lg:px-20 h-full   w-full 2xl:w-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-10  lg:w-full"
          >
            <p className="font-satoshi-bold text-4xl lg:text-7xl">
              Why Choose Us?
            </p>
            <ul className="text-xl lg:text-3xl px-3 font-satoshi-bold flex flex-col items-start text-left  gap-4">
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <span>
                  <GiCheckMark />
                </span>
                Expertise
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Quality Assurance
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Cost Efficiency
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Customer Support
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {" "}
                <span>
                  <GiCheckMark />
                </span>
                Sustainability Impact
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center  w-full 2xl:w-auto"
          >
            <Link
              to={"/contact"}
              className="border bg-[#d4863e] hover:bg-[#e1a356] transition duration-300 w-full lg:w-auto 2xl:w-full text-center text-xl border-[#dca26c] rounded-xl p-3 font-satoshi-bold lg:text-2xl py-4 px-10"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseSection;
