import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const UpperNav = () => {
  return (
    <div>
      <div className="bg-pink-700 align-center px-2 j">
        <div className="flex gap-2 items-center mx-10">
          <BsFillTelephoneFill className="text-white" />
          <p>071-532805 | 9827494116</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UpperNav;
