import { React, useState } from "react";
import Contribution from "./Contribution/Contribution";
import Navbar from "./Navbar";
import { UserAuth } from "../Context/AuthContext";
import Professional from "./Updates/Professional";
import Password from "./Updates/Password";
import Onweb from "./Updates/OnWeb";

const Profilepage = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <Navbar />

      <div className="pt-[160px]">
        <div className="w-full h-full bg-slate-100">
          <div className="h-[250px] w-full bg-slate-100 px-16 py-3">
            <div className="py-5 flex justify-between">
              <p className="font-semibold text-md ">ABOUT ME</p>
              {!edit ? (
                <button
                  onClick={() => {
                    setEdit(!edit);
                  }}
                  className=" bg-orange-400 px-6 py-0 h-[28px]  rounded-lg text-white"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEdit(!edit);
                  }}
                  className=" bg-orange-400 px-6 py-0 h-[28px]  rounded-lg text-white"
                >
                  Save
                </button>
              )}
            </div>
            <textarea
              className={`bg-white resize-none ${
                !edit ? "pointer-events-none" : ""
              } focus:border-white focus:outline-none rounded-lg p-4 text-black text-md w-full h-[150px] border-none`}
              placeholder="Add something about you"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Contribution />
          </div>

          <div className="px-20 mt-6">
            <div className="border border-slate-200 mx-4"></div>
            <Onweb />
            <div className="border border-slate-200 mx-4 mt-6"></div>
            <Professional />
            <div className="border border-slate-200 mx-4 mt-6"></div>
            <Password />
            <div className="border border-slate-200 mx-4 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profilepage;
