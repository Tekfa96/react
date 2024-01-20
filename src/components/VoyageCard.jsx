import React, { useState } from "react";

const VoyageCard = ({ city, desc, img, maxChars = 150 }) => {
  const [showMore, setShowMore] = useState(true);
  const [arrowRotation, setArrowRotation] = useState(false);

  const handleClick = () => {
    setArrowRotation((prevRotate) => !prevRotate);
    setShowMore(!showMore);
  };

  desc = showMore ? desc.substring(0, maxChars) : desc;
  if (desc.length == maxChars) desc += "...";

  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full " src={img} alt="img" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2  flex">
            {city}

            <div
              className={` w-6 h-6 ml-10 flex justify-end  cursor-pointer transform ${
                arrowRotation ? "rotate-180" : "rotate-0"
              }`}
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                alt="show more"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
          </div>
          <p className="text-gray-700 text-base">{desc}</p>
          <div className="  flex items-center mt-2 justify-end">
            <button
              className="text-blue-500  content-start"
              onClick={handleClick}
            >
              {showMore ? "Show more" : "Show less"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoyageCard;
