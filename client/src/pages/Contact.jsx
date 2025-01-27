import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import FrequentlyAskedSection from "../sections/FrequentlyAskedSection";

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#f4f4f4] gap-10  pt-20">
      <div className="flex lg:flex-row flex-col gap-10 2xl:container 2xl:mx-auto  px-6 lg:px-20">
        <div className="flex flex-col gap-4">
          <p className="font-satoshi-bold text-3xl lg:text-7xl tracking-tight">
            Get In Touch with Us
          </p>
          <p className="text-lg">
            We’re here to help you with your solar energy needs. Reach out to us
            anytime for inquiries, consultations, or support.
          </p>
          <div className="flex flex-col gap-4">
            <Link className="border p-4 bg-[#dca26c] font-satoshi-bold text-white border-[#dca26c] rounded-lg">
              Email: ufi@gmail.com
            </Link>
            <div className="border p-4 bg-[#dca26c] font-satoshi-bold text-white border-[#dca26c] rounded-lg">
              Phone: +234 803 123 4567
            </div>
            <div className="border p-4 bg-[#dca26c] font-satoshi-bold text-white border-[#dca26c] rounded-lg">
              Address: Wuse 2, Abuja.
            </div>
            <Link>
              <FaInstagram className="text-3xl text-pink-700" />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
      <div className="pb-20 h-full">
        <FrequentlyAskedSection />
      </div>
    </div>
  );
};

export default Contact;
