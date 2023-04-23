import Browse from "./Browse";
import { React, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { UserAuth } from "../Context/AuthContext";
import ProfileModal from "./ProfileUpdate";
import { useLocation } from "react-router-dom";
import Default from "./Assets/default.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [Edit, setEdit] = useState(false);
  const { user, status, setstatus } = UserAuth();
  const [img, setImageUrl] = useState(Default);
  const [noti, setnoti] = useState(false);
  const [log, setlog] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": true,
  };
  const logout = () => {
    window.open("https://cipher-91w0.onrender.com/logout", "_self");
  };
  useEffect(() => {
    axios
      .get("https://cipher-91w0.onrender.com/login/success", {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        if (res.data === false || location.pathname !== "/") {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (user && user.displayProfile && user.displayProfile.data) {
      const data = new Uint8Array(user.displayProfile.data.data);
      const base64 = btoa(String.fromCharCode.apply(null, data));
      const url = `data:image/png;base64,${base64}`;
      setImageUrl(url);
    }
    if (!user) navigate("/");
    if (status) {
      setnoti(true);

      setTimeout(() => {
        setnoti(false);
        setstatus("");
      }, 3000);
    }
  }, [user, status]);

  const [drop, setdrop] = useState(false);
  return (
    <div className="w-full fixed z-0">
      <Transition
        as="div"
        show={noti}
        enter="transition-all duration-200"
        enterFrom="transform opacity-20 translate-x-full "
        enterTo="transform opacity-100 translate-x-0"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100 translate-x-full"
        leaveTo="opacity-0 translate-x-0"
        className=" fixed z-50 right-0 top-16"
      >
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">{status}</p>
              <p class="text-sm">
                Make sure you know how these changes affect you.
              </p>
            </div>
          </div>
        </div>
      </Transition>
      {Edit ? <ProfileModal state={setEdit} user={user} img={img} /> : null}
      {drop || log ? (
        <div
          className="h-screen w-full absolute z-20 bg-transparent"
          onClick={() => {
            setdrop(false);
            setlog(false);
          }}
        ></div>
      ) : null}
      <div className="navbar w-full flex h-[60px] bg-white border-b pb-5 justify-between">
        <div className="flex">
          <Link to="/profilepage/my-profile">
            <div className="flex space-x-2 mt-3 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 mr-2 mt-1 ml-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>

              <img
                src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                alt="user"
                className="w-9 h-9"
              />

              <span className=" font-semibold text-[22px] font-sans align-middle">
                CipherSchools
              </span>
            </div>
          </Link>
          <div
            className="flex w-[140px] mt-4 ml-6 cursor-pointer"
            onClick={() => setdrop(!drop)}
          >
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 27 27"
                fill="none"
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 26C20.4037 26 26 20.4037 26 13.5C26 6.59625 20.4037 1 13.5 1C6.59625 1 1 6.59625 1 13.5C1 20.4037 6.59625 26 13.5 26Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.875 19.125L10.6875 10.6875L19.125 7.875L16.3125 16.3125L7.875 19.125Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14.0303 14.0303L14.3839 14.3839L14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75C13.6989 12.75 13.8897 12.829 14.0303 12.9697C14.171 13.1103 14.25 13.3011 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303Z"
                  stroke="black"
                ></path>
              </svg>
            </div>
            <span className=" ml-2 text-md">Browse</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-[5px] ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <Transition
              as="div"
              show={drop}
              enter="transition-all duration-200"
              enterFrom="transform opacity-20 scale-75"
              enterTo="transform opacity-100 scale-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100 scale-75"
              leaveTo="opacity-0 scale-0"
              className="fixed top-16 z-50"
            >
              <Browse />
            </Transition>
          </div>
        </div>
        <div className="flex mt-3 w-2/6">
          <div className="w-full flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 stroke-slate-800 absolute z-40 mt-[10px] ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              className="w-[400px] h-[36px] px-6 rounded-2xl bg-slate-100 focus:outline-none"
              placeholder="Seacrh and learn"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 relative right-7 top-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>

          <div className="flex w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-[7px] ml-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <div className=" bg-orange-400 rounded-sm pb-1 w-[16px] h-[22px] p-0 text-center absolute top-0 ml-9 mt-1">
              <span className="text-white text-sm pb-1">0</span>
            </div>
            <div className="flex w-[50px] ml-6">
              <img
                onClick={(e) => {
                  setlog(!log);
                }}
                className=" w-[30px] h-[30px] rounded-full hover:scale-110 duration-200"
                src={img}
                alt="user"
              />
              <div
                className={`fixed w-[80px] h-[50px] top-11 bg-white shadow-xl duration-0 z-30 rounded-lg ${
                  !log ? "hidden" : "  "
                }`}
              >
                <p
                  onClick={(e) => {
                    logout();
                  }}
                  className=" font-semibold text-center cursor-pointer hover:bg-slate-200 py-3 rounded-lg"
                >
                  Logout
                </p>
              </div>
            </div>

            <div className="w-[90px] flex">
              <img
                className="w-[20px] mt-[5px]"
                src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
                alt="user"
              />
              <span className=" font-extrabold text-orange-500 text-lg ml-1 mt-[1px]">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100px] from-orange-400 via-orange-300 to-white bg-gradient-to-bl border-b-2 flex justify-between overflow-hidden">
        <div>
          <div className="pt-2  flex w-[350px]">
            <div
              className="w-[100px] ml-6"
              onClick={() => {
                setEdit(true);
              }}
            >
              <img
                className="w-[80px] h-[80px] rounded-full"
                src={img}
                alt="user"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 relative z-30 left-9 bottom-3 fill-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <div className="pl-5 overflow-hidden">
              <p className=" font-normal text-xl m-auto">Hello,</p>
              <p className=" font-bold text-2xl m-auto">
                {user?.FirstName + " " + user?.LastName}
              </p>
              <p className=" font-normal text-md m-auto">{user?.Email}</p>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-full flex">
          <p className="font-normal text-lg mt-[35px] pr-5">
            {user?.followerscount}
          </p>
          <Link to="/follower">
            <p className=" font-semibold text-lg mt-[35px] pr-5">Followers</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
