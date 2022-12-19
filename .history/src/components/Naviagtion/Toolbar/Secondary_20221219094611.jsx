import React from "react";

function Secondary() {
  return (
    <div className="grid grid-cols-7 selection: justify-between px-16 w-full py-4 bg-white">
      <div>Logo</div>
      <div className="bg-mainColor px-4 py-2 animate-pulse duration-700 delay-200 transition-all cursor-pointer">
        Online Admission
      </div>
      <div className="col-span-5 bg-red-500">Navlinks</div>
    </div>
  );
}

export default Secondary;
