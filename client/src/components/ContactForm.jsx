import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
const BACKEND_PORT =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://fusion-energy-api.vercel.app";
const ContactForm = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.fullname || !data.email || !data.phone || !data.message) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_PORT}/api/send-email`, {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      if (res.status === 200) {
        setData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border bg-white border-[#c0c0c0] p-6 lg:p-10 flex flex-col gap-4 rounded-lg w-full"
    >
      <div className="flex flex-col gap-2">
        <label id="full-name">Full Name</label>
        <input
          id="full-name"
          type="text"
          placeholder="Enter your full name"
          className="border border-[#c0c0c0] p-2 rounded-lg w-full"
          value={data.fullname}
          onChange={(e) => setData({ ...data, fullname: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border border-[#c0c0c0] p-2 rounded-lg w-full"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          className="border border-[#c0c0c0] p-2 rounded-lg w-full"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="message">How can we help?</label>
        <textarea
          id="message"
          type="text"
          placeholder="Type your inquiries here..."
          className="border border-[#c0c0c0] p-2 rounded-lg min-h-44 max-h-44 w-full"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
      </div>
      <div>
        <button
          type="submit"
          className="border text-center flex items-center justify-center p-2 rounded-lg py-4 bg-[#d4863e] hover:bg-[#e1a356] transition duration-300 w-full text-white"
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
