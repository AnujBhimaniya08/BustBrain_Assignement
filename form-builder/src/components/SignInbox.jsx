import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleSubmit } from "../utils/handleSubmit";
import { useNavigate } from "react-router-dom";
const SignInbox = () => {
  const navigate = useNavigate();
  const [signOption, setSignOption] = useState("signup");
//   const [authPagedata, setauthPagedata] = useState(null);
  //   const [flag, setFlag] = useState(false);

  //   useEffect(() => {
  //     const handleAuth = async () => {
  //       console.log("here");
  //       const authdata = handleSubmit();
  //       console.log(await authdata);
  //       const data = await authdata;
  //       setauthPagedata({ data });
  //     };
  //     handleAuth();
  //   }, [flag]);
  return (
    <>
      {signOption === "signup" ? (
        <div className="bg-gray-400 relative top-20 left-30 rounded-lg h-8/12 w-9/12">
          <span>SignUp</span>
          <div className=" relative top-30">
            <form
              className="flex flex-col items-center"
              onSubmit={() => handleSubmit}
            >
              <div>
                <label>Email ID : </label>
                <input
                  id="signUpEmail"
                  className="border-2 border-dashed w-5/12"
                  placeholder="your email Id"
                  type="email"
                />
              </div>
              <div className="m-1">
                <label> Enter the password : </label>
                <input
                  className="border-dashed border-2"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div className="m-1">
                <label> Confirm your password : </label>
                <input
                  className="border-dashed border-2"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <button type="submit" className="bg-blue-400 w-20 p-2 rounded-lg">
                Sign up
              </button>
            </form>

            <button
              onClick={() => {
                navigate("/auth");
              }}
              className="bg-yellow-500 p-2 rounded-md ml-2"
            >
              Oauth
            </button>

            <span className="flex justify-center gap-3">
              Already signed Up ?{" "}
              <Link
                to="/"
                className="text-blue-600 underline cursor-pointer"
                onClick={() => setSignOption("signin")}
              >
                SignIn
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-gray-400 relative top-20 left-30 rounded-lg h-8/12 w-9/12">
          <span>SignIn</span>
          <div className=" relative top-30">
            <form className="flex flex-col items-center">
              <div>
                <label>Email ID : </label>
                <input
                  id="signUpEmail"
                  className="border-2 border-dashed w-5/12"
                  placeholder="your email Id"
                  type="email"
                />
              </div>
              <div className="m-1">
                <label> Enter the password : </label>
                <input
                  className="border-dashed border-2"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-400 w-20 p-2 rounded-lg "
              >
                Log In
              </button>
            </form>
            <span className="flex justify-center gap-3">
              Go for SignUp!
              <Link
                to="/"
                className="text-blue-600 underline cursor-pointer"
                onClick={() => setSignOption("signup")}
              >
                Signup
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInbox;
