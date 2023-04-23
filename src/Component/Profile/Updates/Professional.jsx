import { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const Professional = () => {
  const { UpdateInfo, user } = UserAuth();
  const [edit, setEdit] = useState(false);
  const [education, setEducation] = useState("");
  const [current, setcurrent] = useState("");
  const handleUpload = () => {
    const data = { education: education, current: current };
    UpdateInfo(data);
  };

  return (
    <div>
      <div className="p-3 flex justify-between">
        <p className="font-semibold ">PROFESSIONAL INFORMATION</p>
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
              handleUpload();
            }}
            className=" bg-orange-400 px-6 py-0 h-[28px]  rounded-lg text-white"
          >
            Save
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="px-4">
          <label for="education" class="block mb-2 text-md font-medium">
            Highest education
          </label>
          <select
            id="education"
            onChange={(e) => {
              setEducation(e.target.value);
            }}
            className={`bg-gray-50 px-3 ${
              !edit ? "pointer-events-none" : ""
            } border-white text-black text-md font-semibold rounded-lg focus:ring-white focus:border-white block w-full p-2.5`}
          >
            {user && user.Details && user.Details.education !== "" ? (
              <option value="" disabled selected hidden>
                {user.Details.education}
              </option>
            ) : (
              <option value="" disabled selected hidden>
                Graduation
              </option>
            )}
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Higher Secondary">Higher Secondary</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
          </select>
        </div>
        <div className="px-4">
          <label for="education" class="block mb-2 text-md font-medium">
            What do you do currently?
          </label>
          <select
            onChange={(e) => {
              setcurrent(e.target.value);
            }}
            id="education"
            className={`bg-gray-50 px-3 ${
              !edit ? "pointer-events-none" : ""
            } border-white text-black text-md font-semibold rounded-lg focus:ring-white focus:border-white block w-full p-2.5`}
          >
            {user && user.Details && user.Details.current !== "" ? (
              <option value="" disabled selected hidden>
                {user.Details.current}
              </option>
            ) : (
              <option value="" disabled selected hidden>
                College Student
              </option>
            )}
            <option value="College Student">College Student</option>
            <option value="Schooling">Schooling</option>
            <option value="Teaching">Teaching</option>
            <option value="Job">Job</option>
            <option value="Freelancing">Freelancing</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Professional;
