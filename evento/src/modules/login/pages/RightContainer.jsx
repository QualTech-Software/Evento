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
  QThead,
  CreateAccBtn,
} from "../components/atoms";
import { Link } from "react-router-dom";
import { validatePass } from "../../register/utils/FormValidation";
export const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const RightContainer = ({}) => {
  const [email, setEmail] = useState(""); // useState to store Email address of the user
  const [password, setPassword] = useState(""); // useState to store Password
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [passwordError, setPasswordError] = useState("");

  function validateForm() {
    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert("Invalid Form, Email Address can not be empty");
      return;
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      setPasswordError(
        "Invalid Form, Password must contain greater than or equal to 8 characters."
      );
      return;
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++;
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++;
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++;
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert("Invalid Form, 0 lower case characters in password");
      return;
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert("Invalid Form, 0 upper case characters in password");
      return;
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert("Invalid Form, 0 digit characters in password");
      return;
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert("Invalid Form, 0 special characters in password");
      return;
    }

    // if all the conditions are valid, this means that the form is valid

    alert("Form is valid");
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
          type="email"
          placeholder="Email"
          id="field1"
          value={email} // Add value prop to bind the input field to the email state
          onChange={(e) => setEmail(e.target.value)}
        />
      </StyledForm>

      <StyledForm>
        <input
          type={passwordError ? "text" : "password"}
          placeholder="Password"
          id="field2"
          value={passwordError ? passwordError : password} // Add value prop to bind the input field to the email state
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledForm>
      <CreateAccBtn className="create-acc">
        <StyledButton onClick={validateForm} style={{ opacity: buttonOpacity }}>
          <p> Create Account</p>
        </StyledButton>
      </CreateAccBtn>

      <img
        src={group2}
        alt="Group 2"
        style={{
          width: "449px",
          height: "32px",
          top: "45px",
          borderRadius: "50px",
          position: "relative",
        }}
      />
      <p
        style={{
          top: "-2px",
          position: "relative",
          left: "220px",
          fontSize: "16px",
          fontFamily: "Open Sans",
          fontWeight: "600",
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        Or
      </p>
      <Button
        style={{
          width: "449px",
          height: "56px",
          top: "20px",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "1px solid rgba(171, 171, 171, 1)",
          borderRadius: "8px",
        }}
      >
        <img
          src={icon}
          alt="Google Icon"
          style={{
            width: "24px",
            height: "24px",
            top: "17px",
            margin: "10px",
            paddingRight: "10px",
          }}
        />
        <div className="singin">
          <p>Sign in with Google </p>
        </div>
      </Button>
    </StyledRightcontainer>
  );
};

export default RightContainer;
