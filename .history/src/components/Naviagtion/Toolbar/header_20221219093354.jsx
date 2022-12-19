import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
function Header() {
  return (
    <div className="py-3 px-4 bg-mainColor w-full flex items-center justify-between text-sm">
      {/* number and email */}
      <div className="flex gap-2  text-white">
        <div className="flex gap-2  items-center">
          <IoCallSharp />
          8574858485784 | 5875848738
        </div>
        <div className=" flex gap-2 items-center">
          <HiMail />
          a@gmail.com
        </div>
      </div>
      {/* navigation links */}
      <div className="text-white flex gap-2">
        <div className="capitalize ">check certification</div>
        <div className="capitalize ">check certification</div>{" "}
        <div className="capitalize ">check certification</div>{" "}
        <div className="capitalize ">check certification</div>{" "}
        <div className="capitalize ">check certification</div>{" "}
        <div className="capitalize ">check certification</div>
      </div>
    </div>
  );
}

export default Header;
