import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const [status, setstatus] = useState(false);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const Update = (data) => {
    axios
      .post("http://localhost:4000/update/user", data, {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        if (res) setstatus("Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const UpdateInfo = (data) => {
    axios
      .post("http://localhost:4000/update/user/profile", data, {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        if (res) {
          setstatus("Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/login/success", {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setuser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  const success = () => {
    axios
      .get("http://localhost:4000/login/success", {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setuser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Login = async (data) => {
    axios
      .post("http://localhost:4000/user/login", qs.stringify(data), {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setuser(res.data.user);
        if (res.data.user) {
          setstatus("Loged In !!");
          navigate("/profilepage/my-profile");
        } else {
          setstatus("Wrong email or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Register = async (data) => {
    axios
      .post("http://localhost:4000/register", qs.stringify(data), {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setstatus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        Login,
        Register,
        success,
        status,
        Update,
        setstatus,
        UpdateInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
