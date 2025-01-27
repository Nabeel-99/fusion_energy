import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({
  icon,
  text,
  showLink = false,
  centerIcon = false,
  text2,
  to,
}) => {
  return (
    <div
      className={`flex gap-4 ${
        centerIcon
          ? "flex-col items-center justify-center"
          : "flex-row items-start"
      }  h-full`}
    >
      <div>{icon}</div>
      <div
        className={`flex flex-col gap-4 ${
          centerIcon ? "text-center" : "text-left"
        } text-center  justify-between h-full`}
      >
        <div>
          <p className=" font-satoshi-bold text-xl lg:text-2xl">{text}</p>
          <p>{text2}</p>
        </div>

        <div>
          {" "}
          {showLink && (
            <Link
              to={to}
              className="flex items-center gap-3 border bg-[#dca26c] p-2 py-2 text-white rounded-lg border-[#dca26c] w-1/2"
            >
              Learn More <FaArrowRight />{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
