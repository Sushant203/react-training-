import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
function Header() {
  return (
    <div className="py-3 px-4 bg-mainColor w-full flex items-center">
      <div className="flex gap-2 text-lg text-white">
        <div className="flex gap-2  items-center">
          <IoCallSharp />
          8574858485784 | 5875848738
        </div>
        <div className=" flex gap-2 items-center">
          <HiMail />
          a@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Header;
