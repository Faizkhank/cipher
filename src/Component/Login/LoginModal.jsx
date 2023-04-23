import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Register from "./Register";
import { UserAuth } from "../Context/AuthContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { Login, status } = UserAuth();
  const [showRegister, setRegister] = useState(false);
  const handlelogin = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    Login(data);
  };

  return (
    <div className="color w-full">
      <div className="flex h-screen bg-slate-200">
        <div className="login m-auto w-2/5 h-auto shadow-2xl rounded-3xl bg-white">
          <div className="header flex justify-between w-full px-4 py-5">
            <span className="text-3xl  font-normal">Signin</span>
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div className="title flex w-full justify-center mt-3">
            <div className="flex space-x-2">
              <img
                src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                className="w-9 h-9"
              />
              <span className=" font-medium text-2xl">CipherSchools</span>
            </div>
          </div>
          <div className="flex justify-center">
            <span className=" py-4 font-medium text-lg">Hey, Welcome!</span>
          </div>
          <div>
            <span className="align-middle flex justify-center text-gray-600 font-light">
              Please provide your email and password to signin
            </span>
          </div>
          {status ? (
            <div className="flex justify-center">
              <p className=" text-red-600 font-normal text-lg">{status}</p>
            </div>
          ) : null}
          <div className=" flex justify-center mt-8">
            <form className="w-4/5">
              {!showRegister || status ? (
                <div>
                  <label className="h-[50px] rounded-xl">
                    <input
                      type="text"
                      placeholder="Email ID"
                      className="w-full px-8  h-[50px] border-white bg-slate-200 rounded-xl mb-4 focus:outline-none"
                      name="Email"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </label>
                  <label className=" w-4/5 h-[50px] rounded-xl">
                    <input
                      placeholder="Password"
                      type="password"
                      className="w-full px-8  h-[50px] rounded-xl mb-4 border-white bg-slate-200  focus:outline-none"
                      name="password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </label>
                  <div className="flex justify-center my-6">
                    <button
                      onClick={(e) => {
                        handlelogin(e);
                      }}
                      className=" bg-orange-400 py-3 rounded-xl w-full text-white duration-150 hover:bg-orange-300 "
                    >
                      Signin
                    </button>
                  </div>
                </div>
              ) : (
                <Register />
              )}

              <div className="flex justify-center my-1">
                <span className=" font-normal text-md">
                  Don't have an account ?
                </span>
                <span
                  onClick={() => {
                    setRegister(!showRegister);
                  }}
                  className=" text-orange-400 font-normal text-md ml-2 cursor-pointer"
                >
                  {!showRegister ? "Get Started" : "Signin Now"}
                </span>
              </div>
              <div>
                <div class="relative py-2">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-b-2 border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center">
                    <span class="bg-white font-medium px-4 text-sm text-gray-500">
                      OR
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center py-3" id="signInDiv"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
