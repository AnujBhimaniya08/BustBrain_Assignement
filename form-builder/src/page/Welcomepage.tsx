import React, { useEffect } from "react";
import Welcome from "../components/welcome";
import SignInbox from "../components/SignInbox";
import Auth from "./auth";
import clearCookie from "../utils/clearCookies";
const Welcomepage = () => {
  // clearCookie();
  useEffect(() => {
    function comingWelcomePage() {
      clearCookie();
    }
    comingWelcomePage();
  }, []);
  return (
    <div className="bg-gray-800 h-screen">
      <div className="">
        {" "}
        <span className="border-2 text-4xl font-bold mx-3 my-2 bg-amber-200 p-2">
          Dynamic Form builder
        </span>
      </div>
      <div className=" w-5/12 mx-auto  h-5/12 relative top-30 rounded-lg  bg-gray-300">
        <div className="   ">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
