import React from "react";

import "./right-arrow-icon.scss";

const RightArrowIcon: React.FC = () => {
  return (
    <>
      <svg
        viewBox="0 0 7 17"
        xmlns="http://www.w3.org/2000/svg"
        className="right-arrow-icon"
      >
        <path
          id="Chevron"
          d="M1 1L5.043 8.41667L1 15.8333"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default RightArrowIcon;
