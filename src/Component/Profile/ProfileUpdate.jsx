import React, { useState } from "react";
import "../Profile/style.css";
import { UserAuth } from "../Context/AuthContext";

const ProfileModal = (props) => {
  const { Update, status } = UserAuth();
  const [preview, setpreview] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [Data, setData] = useState({});

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 800000) {
      setProfileImage(e.target.files[0]);
      console.log(e.target.files[0]);
      const blobURL = URL.createObjectURL(e.target.files[0]);
      setpreview(blobURL);
    } else {
      alert("File size must be less than or equal to 800kb.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      for (const key in Data) {
        if (Data.hasOwnProperty(key)) {
          formData.append(key, Data[key]);
        }
      }

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      Update(formData);
      // handle success
    } catch (error) {
      console.error(error);
      // handle error
    }
  };
  const handleclose = () => {
    props.state(false);
  };
  return (
    <div className="color w-full h-full">
      <form>
        <div className="m-auto w-[36vw] h-[450px] shadow-xl rounded-2xl mt-72 bg-white">
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
          <div className="grid grid-cols-2 gap-1">
            <div className="flex justify-center m-auto">
              <label for="dropzone-file">
                {!preview ? (
                  <img
                    className="w-[150px] h-[150px] rounded-full"
                    src={props.img}
                    alt="user"
                  />
                ) : (
                  <img
                    className="w-[150px] h-[150px] rounded-full"
                    src={preview}
                    alt="user"
                  />
                )}
                <input
                  id="dropzone-file"
                  type="file"
                  className=" w-full hidden"
                  name="Image"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => {
                    handleProfileImageChange(e);
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 relative z-30 left-16 bottom-3 fill-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </label>
            </div>
            <div className="col-span-1">
              <div>
                <div className="px-4">
                  <p className=" font-medium p-1">First Name</p>
                  <input
                    placeholder="firstname"
                    name="FirstName"
                    className="w-full rounded-lg focus:outline-none bg-slate-200 border-white py-2 px-3"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </div>
                <div className="px-4">
                  <p className=" font-medium p-1">Last Name</p>
                  <input
                    placeholder="Lastname"
                    name="LastName"
                    className="w-full rounded-lg focus:outline-none bg-slate-200 border-white py-2 px-3"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </div>
                <div className="px-4">
                  <p className=" font-medium p-1">Email</p>
                  <input
                    placeholder={props.user.Email}
                    name="Email"
                    className="w-full rounded-lg pointer-events-none focus:outline-none bg-slate-200 border-white py-2 px-3"
                  />
                </div>
                <div className="px-4">
                  <p className=" font-medium p-1">Mobile Number</p>
                  <input
                    placeholder="Mobile Number"
                    name="Phonenumber"
                    className="w-full rounded-lg pointer-events-none focus:outline-none bg-slate-200 border-white py-2 px-3"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
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
      </form>
    </div>
  );
};
export default ProfileModal;
