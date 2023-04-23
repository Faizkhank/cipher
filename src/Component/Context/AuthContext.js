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
    "Access-Control-Allow-Origin": true,
  };
  useEffect(() => {
    axios
      .get("https://cipher-91w0.onrender.com/login/success", {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setuser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Update = (data) => {
    axios
      .post("https://cipher-91w0.onrender.com/update/user", data, {
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
      .post("https://cipher-91w0.onrender.com/user/profile", data, {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        if (res) {
          console.log(res);
          setstatus("Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const success = () => {
    axios
      .get("https://cipher-91w0.onrender.com/login/success", {
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
      .post("https://cipher-91w0.onrender.com/user/login", qs.stringify(data), {
        withCredentials: true,
        headers,
      })
      .then((res) => {
        setuser(res.data.user);
        if (res.data.user) {
          setstatus("Loged In !!");
          navigate("/profilepage/my-profile");
        }
      })
      .catch((err) => {
        console.log(err);
        setstatus("You Dont Have Account!");
      });
  };
  const Register = async (data) => {
    axios
      .post("https://cipher-91w0.onrender.com/register", qs.stringify(data), {
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
