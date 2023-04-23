import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import "./input.css";
import { AuthContextProvider } from "./Component/Context/AuthContext";
import Login from "./Component/Login/LoginModal";
import Profilepage from "./Component/Profile/Profilepage";

function App() {
  return (
    <Routers>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/profilepage/my-profile"
            element={<Profilepage />}
          ></Route>
        </Routes>
      </AuthContextProvider>
    </Routers>
  );
}

export default App;
