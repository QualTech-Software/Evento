// RightContainer.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { group2, icon } from "../../../../public/assets";
import TextBox from "../../../Components/Form/TextBox";

import axios from "axios";
import {
  Signin,
  ContPara,
  OrPara,
  CreateAcc,
  AccLogo,
  Ptag,
  AccHead,
} from "../components/atoms";
import "../../../Components/Account/Create.css";
import { Link, useNavigate } from "react-router-dom";

const RightContainer = ({}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    console.log(email);
  });
  const handleHome = () => {
    navigate("/");
  };
  const handleSubmit = async () => {
    if (email) {
      try {
        localStorage.setItem("email", email);
        // Handle success response
        // console.log(response.data);
        navigate("/account");
      } catch (error) {
        // Handle error response
        console.error("Registration error:");
      }
    }

    if (validateEmail(email)) {
      navigate("/account");
    } else {
      setEmailError("Invalid email");
    }
  };

  return (
    <CreateAcc className="qt-account-right-container">
      <AccLogo className="qt-logo" onClick={handleHome}></AccLogo>
      <div classname="qt-register-container">
        <Ptag className="qt-para">
          <p>
            If you already have an account register You can{" "}
            <span>
              <Link to="/login">Register here!</Link>
            </span>
          </p>
        </Ptag>
        <AccHead className="qt-head">
          <p>Create an account</p>
        </AccHead>

        <div className="form-container-main">
          <TextBox
            value={email}
            email={email}
            onChange={(e) => setEmail(e.target.value)}
            className="custom-input1"
            id="emailfield"
            style={{ width: "419px" }} // Pass additional styles
            ErrorMsg={emailError}
            setErrorMsg={setEmailError}
            validateEmail={validateEmail}
            setEmail={setEmail}
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
    </CreateAcc>
  );
};

export default RightContainer;
