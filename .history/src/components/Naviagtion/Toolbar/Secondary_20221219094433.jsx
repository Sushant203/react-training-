import React from "react";

function Secondary() {
  return (
    <div className="grid grid-cols-7 selection: justify-between px-8 w-full py-4 bg-white">
      <div>Logo</div>
      <div>Online Admission</div>
      <div className="col-span-5 bg-red-500">Navlinks</div>
    </div>
  );
}

export default Secondary;
