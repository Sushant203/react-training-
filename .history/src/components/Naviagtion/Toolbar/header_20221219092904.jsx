import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
function Header() {
  return (
    <div className="h-10 bg-mainColor w-full">
      <div>
        <div className="flex gap-2 text-white">
          <IoCallSharp className="text-xl text-white" />
          8574858485784 | 5875848738
        </div>
        <div className="text-white flex gap-2">
          <HiMail className="text-xl" />
          a@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Header;
