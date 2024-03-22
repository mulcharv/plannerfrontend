import { useState } from "react";
import "./App.css";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Plan from "./components/Plan";
import PlanPage from "./components/PlanPage";
import Signup from "./components/Signup";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  function CheckUserId() {
    let jtoken = localStorage.getItem("jwt");
    if (jtoken) {
      let jwtdecoded = jwt_decode(jtoken);
      console.log(jwtdecoded);
      let userid = jwtdecoded.user._id;
      return userid;
    } else {
      let userid = [];
      return userid;
    }
  }

  function Loginset(username) {
    setUserDetails(username);
    return;
  }

  function LogOutset() {
    localStorage.removeItem("jwt");
    setUserDetails([]);
    return;
  }

  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar onLogOut={LogOutset} />
        <Routes>
          <Route
            path="/"
            element={<Home data={userDetails} onLoad={CheckUserId} />}
          />
          <Route
            path="/login"
            element={<Login data={userDetails} onLogIn={Loginset} />}
          />
          <Route path="/signup" element={<Signup data={userDetails} />} />
          <Route path="/plan" element={<Plan />}>
            <Route
              path=":planid"
              element={<PlanPage data={userDetails} onLoad={CheckUserId} />}
            />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
