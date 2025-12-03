import React from "react";
import Time from "./time";
const Navbar = () => {
  return (
    <div className="bg-gray-400 m-2 rounded-md p-3 flex justify-between ">
      <span className="text-2xl font-bold">BrainBuzzFormBuilder</span>
      <div className="border-2 w-5/12">
        <div className="flex gap-3 w-5/12">
          <span className="text-xl">Token timer : </span>
          <span>{<Time />}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
