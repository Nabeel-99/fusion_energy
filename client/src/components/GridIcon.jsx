import React from "react";

const GridIcon = ({ icon, text }) => {
  return (
    <div className="flex  items-center gap-4">
      <div>{icon}</div>

      <p className="text-left font-satoshi-bold text-xl lg:text-2xl">{text}</p>
    </div>
  );
};

export default GridIcon;
