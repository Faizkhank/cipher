import { React, useEffect, useState } from "react";
import Default from "./Profile/Assets/default.png";
const UserCard = (props) => {
  const [img, setImageUrl] = useState(Default);

  useEffect(() => {
    if (
      props.items &&
      props.items.displayProfile &&
      props.items.displayProfile.data
    ) {
      const data = new Uint8Array(props.items.displayProfile.data.data);
      const base64 = btoa(String.fromCharCode.apply(null, data));
      const url = `data:image/png;base64,${base64}`;
      setImageUrl(url);
    }
  }, [props.items]);
  return (
    <div className="w-[200px] h-[200px] bg-slate-800 rounded-lg m-2">
      <div className="flex justify-center">
        <div className="w-full">
          <div className=" flex justify-center mt-2">
            <img className="w-[100px] h-[100px] rounded-full" src={img} />
          </div>
          <div className="p-2">
            <p className="text-white text-lg">
              {props.items.FirstName + " " + props.items.LastName}
            </p>
            <p className="text-lg text-white">Email</p>
            <p className="text-white">{props.items.Email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
