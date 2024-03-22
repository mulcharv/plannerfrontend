import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("jwt") || false,
  );
  const onLo = props.onLogOut;

  let navigate = useNavigate();

  const handleLogOut = () => {
    onLo();
    setUserInfo(false);
  };
}
