import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import group2 from "../../../assets/Group2.png";
import "../components/Login.css";
import icon from "../../../assets/Googleicon.png";
import {
  StyledRightcontainer,
  StyledLogo,
  StyledForm,
  QTpara,
  StyledButton,
  Styleddivider,
  QThead,
  CreateAccBtn,
  Styledgooglebutton,
} from "../components/atoms";
import { Link, useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePass = (password, setPasswordError) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  if (!password.match(passwordRegex)) {
    setPasswordError(
      "Password must have at least 8 characters including at least 1 lowercase, 1 uppercase, 1 digit, and 1 special symbol"
    );
  } else {
    setPasswordError("");
  }
};
const RightContainer = ({}) => {
  const [email, setEmail] = useState(""); // useState to store Email address of the user
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(""); // useState to store Password
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleBlurEmail = () => {
    if (!email && !emailError) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
  };

  function validateForm() {
    setButtonOpacity(1);
    // Check if the Email is an Empty string or not.

    if (validateEmail(email)) {
      navigate("/account");
    } else {
      setEmailError("Invalid email");
    }
  }

  return (
    <StyledRightcontainer>
      <StyledLogo>
        <img src="../../../assets/LOGO.png" alt="" />
      </StyledLogo>
      <QTpara>
        <p>
          If you don’t have an account register You can{"  "}
          <Link to={"/create"} sx={{}}>
            Register here!
          </Link>
        </p>
      </QTpara>
      <QThead className="qt-head">
        <p>Log In</p>
      </QThead>

      <StyledForm>
        <input
          className={emailError ? "textfieldemail error" : "textfieldemail"}
          placeholder="Email"
          id="field1"
          value={emailError ? emailError : email} // Add value prop to bind the input field to the email state
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={handleBlurEmail}
          onKeyDown={(e) => {
            if (e.keyCode === 8 && emailError !== "") {
              // Check if backspace key was pressed and there's at least one character in the password field
              setEmailError(""); // Clear the error message
            }
          }}
        />
      </StyledForm>

      <StyledForm>
        <input
          className={passwordError ? "textfieldpass error" : "textfieldpass"}
          placeholder="Password"
          id="field2"
          type={passwordError ? "text" : "password"}
          value={passwordError ? passwordError : password} // Add value prop to bind the input field to the email state
          onChange={(e) => setPassword(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => {
            e.target.placeholder = passwordError ? "" : "Password";
            validatePass(password, setPasswordError);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 8 && passwordError !== "") {
              // Check if backspace key was pressed and there's at least one character in the password field
              setPasswordError(""); // Clear the error message
            }
          }}
        />
      </StyledForm>
      <CreateAccBtn className="create-acc">
        <StyledButton onClick={validateForm} style={{ opacity: buttonOpacity }}>
          <p> Create Account</p>
        </StyledButton>
      </CreateAccBtn>
      <Styleddivider>
        <img src={group2} alt="Group 2" />
        <p>Or</p>
      </Styleddivider>
      <Styledgooglebutton>
        <img src={icon} alt="Google Icon" />
        <p>Log in with Google Account </p>
      </Styledgooglebutton>
    </StyledRightcontainer>
  );
};

export default RightContainer;
