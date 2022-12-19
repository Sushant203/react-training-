import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
function Header() {
  const NavLinks = [
    { title: "check certificate" },
    { title: "check certificate" },
    { title: "check certificate" },
    { title: "check certificate" },
    { title: "check certificate" },
    { title: "check certificate" },
  ];
  return (
    <div className="py-3 h-fit  md:w-10/12 mx-auto flex flex-col bg-green-400 md:bg-red-500 md:flex-row items-center justify-between text-xs">
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
      <div className="text-white flex gap-4 text-xs ">
        {NavLinks.map((val, i) => {
          return (
            <div key={i} className="capitalize ">
              check certification
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
