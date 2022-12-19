import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
const UpperNav = () => {
  const obj = [
    {
      title: " Check Certificate",
    },
    {
      title: "Career",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Download Brochure",
    },
    {
      title: "Hackathons",
    },
    {
      title: " Hire Talents",
    },
    {
      title: "Testimonials",
    },
  ];
  return (
    <div>
      <div className="flex w-full bg-[#CB1C8D] align-center px-2 py-1 text-white text-xs justify-between container">
        <div className="flex gap-3">
          <div className="flex gap-2 items-center ml-24">
            <BsFillTelephoneFill className="text-white" />
            <p>071-532805 | 9827494116</p>
          </div>
          <div className="flex gap-1 items-center px-2 py-1 text-xs">
            <IoMail className="" />
            <p>training@hubit.com.np</p>
          </div>
        </div>

        {/* right section */}
        <div className="flex gap-3 items-center text-sm mr-24">
          {obj.map((val, i) => {
            return (
              <div
                key={i}
                className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300"
              >
                {val.title}
              </div>
            );
          })}

          {/* <div className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300">
           
          </div>
          <div className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300">
           
          </div>
          <div className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300">
            
          </div>
          <div className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300">
            
          </div>
          <div className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300">
           
          </div>
          <div className="cursor-pointer hover:transition ease-in-out delay-150 hover:-translate-y-0.5 scale-90 duration-300">
            Testimonials */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
