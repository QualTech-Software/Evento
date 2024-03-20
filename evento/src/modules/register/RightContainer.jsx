// RightContainer.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { group2, icon } from "../../../public/assets";
import TextBox from "../../Components/Form/TextBox"; // Import the custom Textbox component
import { Signin, ContPara, OrPara } from "../create/components/atoms";
import "../../Components/Account/Create.css";

const RightContainer = ({ handleEmailChange, handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    console.log(email);
  });

  const handleChange = (e) => {
    console.log(e, e.target, e.target.value);
  };

  return (
    <div className="qt-account-right-container">
      <div className="qt-logo">
        <div className="qt-para">
          <p>
            If you already have an account register You can{" "}
            <span>Login here !</span>
          </p>
        </div>
        <div className="qt-head">
          <p>Create an account</p>
        </div>

        <div className="form-container-main">
          <TextBox
            value={email}
            onChange={handleEmailChange}
            className="custom-input1"
            style={{ width: "419px" }} // Pass additional styles
            ErrorMsg={emailError}
            setErrorMsg={setEmailError}
            validateEmail={validateEmail}
          />
        </div>

        <Button onClick={handleSubmit} className="xyz">
          <ContPara className="xyz-2">Continue</ContPara>
        </Button>
        <img src={group2} alt="Group 2" className="group2" />
        <OrPara className="or1">Or</OrPara>
        <Button className="googlebtn" style={{ backgroundColor: "white" }}>
          <img src={icon} alt="Google Icon" className="google-img" />
          <Signin className="singin">
            <p>Sign in with Google</p>
          </Signin>
        </Button>
      </div>
    </div>
  );
};

export default RightContainer;
