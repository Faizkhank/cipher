import { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const Onweb = () => {
  const { UpdateInfo } = UserAuth();
  const [edit, setEdit] = useState(false);
  const [Data, setData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      UpdateInfo(Data, "Social");
      // handle success
    } catch (error) {
      console.error(error);
      // handle error
    }
  };
  return (
    <div>
      <div className="p-3 flex justify-between">
        <p className="font-semibold ">ON THE WEB</p>
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
            onClick={(e) => {
              setEdit(!edit);
              handleFormSubmit(e);
            }}
            className=" bg-orange-400 px-6 py-0 h-[28px]  rounded-lg text-white"
          >
            Save
          </button>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="px-4">
          <p className=" font-medium p-1">Linkedin</p>
          <input
            placeholder="Linkedin"
            name="linkedin"
            className={`w-full rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="px-4">
          <p className=" font-medium p-1">Github</p>
          <input
            placeholder="Github"
            name="github"
            className={`w-full rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="px-4">
          <p className=" font-medium p-1">Facebook</p>
          <input
            placeholder="Facebook"
            name="facebook"
            className={`w-full rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="px-4">
          <p className=" font-medium p-1">Twitter</p>
          <input
            placeholder="Twitter"
            name="twitter"
            className={`w-full rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="px-4">
          <p className=" font-medium p-1">Instagram</p>
          <input
            placeholder="Instagram"
            name="instagram"
            className={`w-full rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="px-4">
          <p className=" font-medium p-1">Website</p>
          <input
            placeholder="Website"
            name="website"
            className={`w-full rounded-lg py-2 px-3 ${
              !edit ? "pointer-events-none" : ""
            }`}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Onweb;
