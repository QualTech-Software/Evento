import React, { useState } from "react";
import "../Components/Account/Create.css";
import { useNavigate } from "react-router-dom";
import LeftContainer from "../modules/common/LeftContainer";
import RightContainer from "../modules/register/RightContainer";

const Create = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    console.log(email);
    if (validateEmail(email)) {
      navigate("/account");
    } else {
      setEmailError("Invalid email");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="qt-create qt-account-main-container">
        <LeftContainer />
        <RightContainer
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          emailError={emailError}
        />
      </div>
    </>
  );
};

export default Create;
