import { useState } from "react";
import Resset from "./RessetModal";
const Password = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? <Resset state={setEdit} /> : null}
      <div className="p-3 flex justify-between">
        <p className="font-semibold ">PASSWORD & SECURITY</p>
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
      <div className="grid grid-cols-1 gap-2">
        <div className="px-4" onClick={(e) => setEdit(true)}>
          <p className=" font-medium p-1">Password</p>
          <input
            placeholder="..............."
            name="Linkedin"
            className={`w-full font-bold text-xl rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};
export default Password;
