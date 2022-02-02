import React from 'react';

const SpinningIcon = () => {
  return (
    <div className="spinner-container">
      <svg
        className="spinner"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#718096"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M168,40.7a96,96,0,1,1-80,0"
          fill="none"
          stroke="#718096"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </svg>
    </div>
  );
};

export default SpinningIcon;
