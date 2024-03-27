import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import group2 from "../../../assets/Group2.png";
import "../components/Login.css";
import icon from "../../../assets/Googleicon.png";
import axios from "axios";
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

    if (validateEmail(email) && password) {
      axios
        .post(
          "http://localhost:3000/api/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            if (response.data && response.data.msg === "Logged in!") {
              navigate("/");
            } else {
              console.log("Email or password is incorrect");
              // Set appropriate error message or handle as needed
            }
          } else {
            console.log("Unexpected response:", response);
            // Handle other success status codes or unexpected responses
          }
          setEmailError(""); // Clear email error if login request succeeds
        })
        .catch((error) => {
          if (error.response) {
            // Server responded with an error status code
            console.error("Server error:", error.response.data);
            // Set error message or handle as needed
          } else if (error.request) {
            // No response received (network error)
            console.error("Network error:", error.request);
            // Set error message or handle as needed
          } else {
            // Something else went wrong
            console.error("Error:", error.message);
            // Set error message or handle as needed
          }
        });
    } else {
      setEmailError("Invalid email");
      // Optionally set a password error if needed
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={handleBlurEmail}
          onKeyDown={(e) => {
            if (e.keyCode === 8 && emailError !== "") {
              setEmailError("");
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => {
            e.target.placeholder = passwordError ? "" : "Password";
            validatePass(password, setPasswordError);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 8 && passwordError !== "") {
              setPasswordError("");
            }
          }}
        />
      </StyledForm>
      <CreateAccBtn className="create-acc">
        <StyledButton onClick={validateForm} style={{ opacity: buttonOpacity }}>
          <p> Continue</p>
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
