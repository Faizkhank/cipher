import React, { useState } from "react";
import { UserAuth } from "../Context/AuthContext";

const Register = () => {
  const { Register } = UserAuth();
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Register(Data);
  };

  return (
    <div>
      <div className="flex">
        <label className="w-1/2 h-[50px] rounded-xl mr-2">
          <input
            type="text"
            placeholder="First name"
            className="w-full px-3  h-[50px] border-slate-400 border-2 rounded-xl mb-4 focus:outline-gray-500"
            name="first_name"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label className="w-1/2 h-[50px] rounded-xl">
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-3  h-[50px] rounded-xl mb-4 border-slate-400 border-2 focus:outline-gray-500"
            name="last_name"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </div>
      <input
        type="text"
        placeholder="Email"
        className="w-full px-3 mt-2 h-[50px] rounded-xl mb-2 border-slate-400 border-2 focus:outline-gray-500"
        name="email"
        onChange={(e) => handleInputChange(e)}
      />
      <div className="flex">
        <input
          type="text"
          placeholder="Phone(Optional)"
          className="w-2/5 px-3 mr-2  h-[50px] rounded-xl mb-4 border-slate-400 border-2 focus:outline-gray-500"
          name="phone"
          maxLength="10"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full px-3  h-[50px] rounded-xl mb-4 border-slate-400 border-2 focus:outline-gray-500"
          name="password"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="flex justify-center my-4">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className=" bg-orange-400 py-3 rounded-xl w-full text-white duration-150 hover:bg-orange-300 "
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
export default Register;
