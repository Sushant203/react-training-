import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
const UpperNav = () => {
  return (
    <div>
      <div className="bg-pink-700 align-center px-2 text-white text-sm">
        <div className="flex">
          <div className="flex gap-2 items-center mx-10">
            <BsFillTelephoneFill className="text-white" />
            <p>071-532805 | 9827494116</p>
          </div>
          <div className="flex text-center items-center px-2 py-1">
            <IoMail />
            <p>training@hubit.com.np</p>
          </div>
        </div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default UpperNav;
