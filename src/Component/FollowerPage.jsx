import axios from "axios";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
const FollowerPage = () => {
  const { user } = UserAuth();
  const [data, setdata] = useState([]);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  console.log(data);

  useEffect(() => {
    if (!user || !user.id) {
      // Check that user object and its id property exist
      return;
    }
    axios
      .get(`https://cipher-91w0.onrender.com/users/${user.id}/followers`, {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <div className="pt-40">
      <div className="flex flex-wrap">
        {data.map((items, index) => (
          <UserCard items={items} key={index} />
        ))}
      </div>
    </div>
  );
};
export default FollowerPage;
