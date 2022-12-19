import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
const UpperNav = () => {
  return (
    <div className="container">
      <div className="flex bg-pink-700 align-center px-2 text-white text-xs justify-between">
        <div className="flex">
          <div className="flex gap-2 items-center">
            <BsFillTelephoneFill className="text-white" />
            <p>071-532805 | 9827494116</p>
          </div>
          <div className="flex gap-2 items-center px-2 py-1 text-xs">
            <IoMail className="mt-1" />
            <p>training@hubit.com.np</p>
          </div>
        </div>

        {/* right section */}
        <div className="flex gap-3 items-center text-xs">
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
