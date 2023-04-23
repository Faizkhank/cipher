import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import "./input.css";
import { AuthContextProvider } from "./Component/Context/AuthContext";
import Login from "./Component/Login/LoginModal";
import Profilepage from "./Component/Profile/Profilepage";
import Navbar from "./Component/Profile/Navbar";
import FollowerPage from "./Component/FollowerPage";

function App() {
  return (
    <Routers>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/profilepage/my-profile"
            element={<Profilepage />}
          ></Route>
          <Route path="/follower" element={<FollowerPage />}></Route>
        </Routes>
      </AuthContextProvider>
    </Routers>
  );
}

export default App;
