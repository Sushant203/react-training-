import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
const UpperNav = () => {
  return (
    <div>
      <div className="flex w-full bg-pink-700 align-center px-2 py-2 text-white text-xs justify-between container">
        <div className="flex">
          <div className="flex gap-2 items-center ml-20">
            <BsFillTelephoneFill className="text-white" />
            <p>071-532805 | 9827494116</p>
          </div>
          <div className="flex gap-1 items-center px-2 py-1 text-xs">
            <IoMail className="" />
            <p>training@hubit.com.np</p>
          </div>
        </div>

        {/* right section */}
        <div className="flex gap-3 items-center text-xs mr-4">
          <div>Check Certificate</div>
          <div>Career</div>
          <div>Contact Us</div>
          <div>Download Brochure</div>
          <div>Hackathons</div>
          <div>Hire Talents</div>
          <div>Testimonials</div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
