import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import FrequentlyAskedSection from "../sections/FrequentlyAskedSection";
import FadeInEffect from "../components/FadeInEffect";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#f4f4f4] gap-10  pt-20">
      <FadeInEffect translateY={50}>
        <div className="flex lg:flex-row flex-col gap-10 2xl:container 2xl:mx-auto  px-6 lg:px-20">
          <div className="flex flex-col gap-4">
            <p className="font-satoshi-bold text-3xl lg:text-7xl tracking-tight">
              Get In Touch with Us
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg"
            >
              We’re here to help you with your solar energy needs. Reach out to
              us anytime for inquiries, consultations, or support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <Link className="border p-4 bg-[#d4863e] font-satoshi-bold text-white border-[#d4863e] rounded-lg">
                Email: ufi@gmail.com
              </Link>
              <div className="border p-4 bg-[#d4863e] font-satoshi-bold text-white border-[#d4863e] rounded-lg">
                Phone: +234 803 123 4567
              </div>
              <div className="border p-4 bg-[#d4863e] font-satoshi-bold text-white border-[#d4863e] rounded-lg">
                Address: Wuse 2, Abuja.
              </div>
              <Link>
                <FaInstagram className="text-3xl text-pink-700" />
              </Link>
            </motion.div>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </FadeInEffect>

      <div className="pb-20 h-full">
        <FrequentlyAskedSection />
      </div>
    </div>
  );
};

export default Contact;
