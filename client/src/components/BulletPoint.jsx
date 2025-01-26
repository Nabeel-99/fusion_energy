import React from "react";

const BulletPoint = ({ number, title, description }) => {
  return (
    <div className="flex lg:items-center  gap-4">
      <div className="w-10 lg:w-20">
        <div className="border border-[#dca26c]  w-10 h-10 lg:w-20 lg:h-20 bg-[#d4863e] text-white flex items-center justify-center text-2xl lg:text-4xl font-satoshi-bold rounded-full">
          {number}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-satoshi-bold text-xl lg:text-2xl">{title}</p>
        <p> {description}</p>
      </div>
    </div>
  );
};

export default BulletPoint;
