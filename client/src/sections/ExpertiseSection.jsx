import React, { useRef } from "react";
import ExpertOne from "../assets/images/expert1.jpg";
import ExpertTwo from "../assets/images/expert2.jpg";
import ExpertThree from "../assets/images/expert3.jpg";
import BulletPoint from "../components/BulletPoint";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import FadeInEffect from "../components/FadeInEffect";
const ExpertiseSection = () => {
  const expertiseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: expertiseRef,
    offset: ["start center", "end end"],
  });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#f6f2ec"]
  );
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      <motion.div
        ref={expertiseRef}
        style={{ background }}
        className="flex lg:flex-row flex-col  pb-10  w-full justify-between pt-4   gap-10"
      >
        <div className="2xl:container 2xl:mx-auto px-2 flex flex-col lg:flex-row gap-10 pt-20 pb-10 justify-between w-full">
          <div className="w-full flex flex-col gap-10 lg:w-1/2  ">
            <div className="flex lg:px-20 flex-col items-center lg:items-baseline gap-4">
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                src={ExpertOne}
                alt=""
                className="max-w-44 max-h-44 rounded-xl   lg:translate-x-20 lg:w-96 object-cover lg:h-72 lg:max-h-72 lg:max-w-96"
              />
              <div className="flex gap-6">
                <motion.img
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src={ExpertTwo}
                  alt=""
                  className="max-w-32 max-h-32 rounded-xl lg:w-64 object-cover lg:h-80 lg:max-h-80 lg:max-w-64"
                />
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src={ExpertThree}
                  alt=""
                  className="max-w-44 max-h-44 rounded-xl xl:w-80 object-cover xl:h-96 xl:max-h-96 xl:max-w-80"
                />
              </div>
            </div>
          </div>
          <motion.div
            ref={sectionRef}
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col gap-4 px-4 lg:pr-20 w-full  lg:w-1/2 "
          >
            <motion.p
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-satoshi-bold text-left"
            >
              Leading the Way in Solar Technology
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg">
              Expert solar solutions, backed by experience and technology. We
              design systems that deliver real results—efficient, reliable, and
              tailored for your needs.
            </motion.p>
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <BulletPoint
                  number={"1"}
                  title={"Experienced Team"}
                  description={
                    "Highly skilled engineers and energy consultants."
                  }
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <BulletPoint
                  number={"2"}
                  title={"Tailored Solutions"}
                  description={"Customized to your energy needs."}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <BulletPoint
                  number={"3"}
                  title={"Sustainability Focus"}
                  description={"Commitment to eco-friendly solutions."}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <BulletPoint
                  number={"4"}
                  title={"Cutting-Edge Technology"}
                  description={"Advanced solar panels and inverters."}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </FadeInEffect>
  );
};

export default ExpertiseSection;
