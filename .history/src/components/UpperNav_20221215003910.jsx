import React from "react";
import { BsTelephone } from "react-icons/bs";

const UpperNav = () => {
  return (
    <div>
      <div className="bg-pink-700 text-center px-2 mx-4">
        <div className="flex gap-3 items-center">
          <BsTelephone />
          <p>071-532805 | 9827494116</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UpperNav;
