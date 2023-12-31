import React from "react";

function DiscoveryIcon({size,color="currentColor"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M20.98 3.02a3.43 3.43 0 00-3.29-.91l-9.8 2.45a4.56 4.56 0 00-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 003.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28zM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88z"
      ></path>
    </svg>
  );
}

export default DiscoveryIcon;
