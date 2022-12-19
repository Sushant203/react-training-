import React from "react";

function Secondary() {
  const Nalink = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "contact",
    },
    {
      title: "testonomials",
    },
  ];
  return (
    <div className="grid grid-cols-3 md:grid-cols-7 gap-2 justify-between px-16 w-full py-4 bg-white">
      <div>Logo</div>
      <div className="bg-mainColorpx-0 md:px-4 py-2 animate-pulse duration-700 delay-200 text-xs rounded-md transition-all cursor-pointer text-white">
        Online Admission
      </div>
      <div className="md:col-span-5 hidden md:flex justify-center items-center gap-3">
        {Nalink.map((val, i) => {
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="border-b-2 w-fit  border-transparent capitalize hover:border-mainColor rounded-sm p-1 cursor-pointer  ">
                {val.title}
              </div>
              <div className="h-5 w-[2px] rounded-md bg-gray-600"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Secondary;
