import axios from "axios";
import { React, useState } from "react";
const Resset = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": true,
  };
  const handleclose = () => {
    props.state(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match");
      return;
    }
    axios
      .post(
        "https://cipher-91w0.onrender.com/check-password",
        { Password: oldPassword },
        {
          withCredentials: true,
          headers,
        }
      )
      .then((data) => {
        console.log(data);
        if (data.data.success) {
          axios
            .post(
              "https://cipher-91w0.onrender.com/update-password",
              { Password: newPassword },
              {
                withCredentials: true,
                headers,
              }
            )
            .then((data) => {
              if (data.data.success === true) setError("Password Updated");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setError("Incorrect password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="color w-full h-full z-50 absolute">
      <div>
        <div className="m-auto w-[26vw] h-[450px] shadow-xl rounded-2xl mt-72 bg-white">
          <div className="header flex justify-between w-full px-4 py-5">
            <span className="text-xl font-semibold">Profile Update</span>
            <span className="cursor-pointer">
              <svg
                onClick={() => handleclose()}
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
          {error ? (
            <div
              class="p-4 mb-4 text-sm text-white rounded-lg mx-12 bg-orange-400"
              role="alert"
            >
              {error}
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-1">
            <div className="w-full">
              <div>
                <div className="px-4">
                  <p className=" font-medium p-1">Old password</p>
                  <input
                    placeholder="Old Password"
                    name="OldPassword"
                    type="password"
                    className="w-full rounded-lg focus:outline-none bg-slate-200 border-white py-2 px-3"
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="px-4">
                  <p className=" font-medium p-1">New Password</p>
                  <input
                    placeholder="New Password"
                    name="NewPassword"
                    type="password"
                    className="w-full rounded-lg focus:outline-none bg-slate-200 border-white py-2 px-3"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="px-4">
                  <p className=" font-medium p-1">Rewrite Password</p>
                  <input
                    placeholder="Rewrite Password"
                    name="Password"
                    type="password"
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="w-full rounded-lg  focus:outline-none bg-slate-200 border-white py-2 px-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-end pr-8 mt-6 space-x-3">
            <button
              onClick={() => {
                handleclose();
              }}
              className=" bg-black px-8 py-0 h-[35px]  rounded-lg text-white"
            >
              Cancle
            </button>
            <button
              onClick={(e) => {
                handleFormSubmit(e);
              }}
              className=" bg-orange-400 px-8 py-0 h-[35px]  rounded-lg text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resset;
