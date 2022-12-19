import React from "react";
import { BsTelephone } from "react-icons/bs";

const UpperNav = () => {
  return (
    <div>
      <div className="bg-pink-700 text-center py-3">
        <div className="flex gap-3">
          <BsTelephone />
          <p>071-532805 | 9827494116</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UpperNav;
