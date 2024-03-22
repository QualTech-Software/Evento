import React, { useState } from "react";
import "../components/Login.css";
import { useNavigate } from "react-router-dom";
import LeftContainer from "../../common/LeftContainer";
import RightContainer from "./RightContainer";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("Invalid email address");
      return;
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="qt-create qt-account-main-container">
        <LeftContainer />
        <RightContainer
          email={email}
          //   password={password}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          handlePassword={handlePassword}
        />
      </div>
    </>
  );
};

export default Login;
