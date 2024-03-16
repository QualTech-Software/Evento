// RightContainer.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { group2, icon } from "../../../public/assets";
import TextBox from "../Form/TextBox"; // Import the custom Textbox component

import "../Account/Create.css";

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

        <div className="form-container">
          <TextBox
            label="Email address"
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
          <p className="xyz-2">Continue</p>
        </Button>
        <img src={group2} alt="Group 2" className="group2" />
        <p className="or1">Or</p>
        <Button className="googlebtn" style={{ backgroundColor: "white" }}>
          <img src={icon} alt="Google Icon" className="google-img" />
          <div className="singin">
            <p>Sign in with Google</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default RightContainer;
