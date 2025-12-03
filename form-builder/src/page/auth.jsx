import React from "react";

const Auth = () => {
  return (
    <div>
      <div className="  flex  flex-col items-center p-1 gap-10 relative top-20">
        <h1 className="text-5xl">Authorize yourself!</h1>
        <a
          href="http://localhost:3000/auth/redirect-testing"
          className="bg-blue-400 flex justify-center py-1 rounded-md text-xl cursor-pointer w-25 h-10"
        >
          Start
        </a>
      </div>
    </div>
  );
};

export default Auth;
