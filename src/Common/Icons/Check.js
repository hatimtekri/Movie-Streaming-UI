import React from "react";

function CheckIcon({size,color="currentColor"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 14 14"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.917 7l2.916 2.917 5.833-5.834"
      ></path>
    </svg>
  );
}

export default CheckIcon;


