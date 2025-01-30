import React from "react";

const ContactForm = () => {
  return (
    <form className="border bg-white border-[#c0c0c0] p-6 lg:p-10 flex flex-col gap-4 rounded-lg w-full">
      <div className="flex flex-col gap-2">
        <label id="full-name">Full Name</label>
        <input
          id="full-name"
          type="text"
          placeholder="Enter your full name"
          className="border border-[#c0c0c0] p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border border-[#c0c0c0] p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          className="border border-[#c0c0c0] p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="message">How can we help?</label>
        <textarea
          id="message"
          type="text"
          placeholder="Type your inquiries here..."
          className="border border-[#c0c0c0] p-2 rounded-lg min-h-44 max-h-44 w-full"
        />
      </div>
      <div>
        <button
          type="submit"
          className="border p-2 rounded-lg py-4 bg-[#d4863e] hover:bg-[#e1a356] transition duration-300 w-full text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
