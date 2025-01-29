import React from "react";
import ServiceImage from "../assets/images/service.jpg";
import ContactForm from "./ContactForm";
import { GiCheckMark } from "react-icons/gi";
import FadeInEffect from "./FadeInEffect";
import { motion } from "motion/react";
const DetailService = ({ icon, header, subheader, description, workflow }) => {
  return (
    <FadeInEffect translateY={50}>
      <div className="flex flex-col gap-10 pt-10 pb-10 2xl:container 2xl:mx-auto">
        <div className="flex flex-col gap-10 px-6 lg:px-32">
          {icon}
          <div className="flex flex-col gap-2 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-7xl tracking-tight  xl:w-2/3  font-satoshi-bold"
            >
              {header}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg"
            >
              {" "}
              {subheader}
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl lg:w-2/3"
          >
            {description}
          </motion.p>
          <div className="relative flex flex-col gap-10">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              src={ServiceImage}
              alt=""
              className="rounded-xl lg:h-[600px] w-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              className="xl:absolute xl:right-10 xl:w-[40rem] shadow-md xl:-bottom-16"
            >
              <ContactForm />
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 pt-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-satoshi-bold text-3xl lg:text-4xl"
            >
              Our Workflow
            </motion.p>
            <ul className="text-xl flex flex-col gap-4">
              {workflow.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={index}
                  className="flex items-center gap-4"
                >
                  <span>
                    <GiCheckMark />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeInEffect>
  );
};

export default DetailService;
