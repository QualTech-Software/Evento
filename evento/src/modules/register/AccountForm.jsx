import React, { useState, useEffect } from "react";
import "../../Components/AccountExtraFields/Account.css";
import axios from "axios";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  StyledButton,
  CheckboxStyle,
  FormCont,
  QtAccept,
  CreateAccBtn,
} from "./components/atoms";
import {
  CustomInputB,
  CustomInputC,
  CustomInputD,
  CustomInputE,
} from "./pages/RegisterInput";

const AccountForm = ({
  firstName,
  lastName,
  handleFirstName,
  handleLastName,
  password,
  handlePassword,
  cpassword,
  handleCpassword,
  phoneNumber,
  handlePhoneNumberChange,
  errorPhoneMsg,
  setErrorPhoneMsg,
}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [checkboxEnabled, setCheckboxEnabled] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  useEffect(() => {
    if (
      password &&
      cpassword &&
      phoneNumber &&
      errorPhoneMsg === "" &&
      !fullNameError
    ) {
      setCheckboxEnabled(true);
    } else {
      setCheckboxEnabled(false);
    }
  }, [password, cpassword, phoneNumber, errorPhoneMsg]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      // Assuming `handleEmail` is not needed since we retrieve email from localStorage
      // handleEmail(email);
    }
  }, []);

  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    if (
      !email ||
      !password ||
      !cpassword ||
      !phoneNumber ||
      !firstName ||
      !lastName
    ) {
      setIsEmpty(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        email,
        firstName,
        lastName,
        phoneNumber,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }

    const error = validateForm();
    if (error || fullNameError) {
      alert(error || fullNameError);
    } else {
      setIsEmpty(false);
      setCheckboxEnabled(true);
      setButtonOpacity(1);
    }
  };

  const handleCheckboxClick = () => {
    if (checkboxEnabled) {
      setButtonOpacity(1);
    }
  };

  const validateForm = () => {
    if (!firstName || !lastName || !password || !cpassword || !phoneNumber) {
      return "All fields are required";
    }
    return "";
  };

  return (
    <FormCont className="form-container">
      <CustomInputB
        firstName={firstName}
        lastName={lastName}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        firstNameError={firstNameError}
        lastNameError={lastNameError}
        isEmpty={isEmpty}
        setFirstNameError={setFirstNameError}
        setLastNameError={setLastNameError}
      />

      <CustomInputC
        passwordError={passwordError}
        password={password}
        handlePassword={handlePassword}
        isEmpty={isEmpty}
        setPasswordError={setPasswordError}
      />
      <CustomInputD
        cpasswordError={cpasswordError}
        cpassword={cpassword}
        handleCpassword={handleCpassword}
        password={password}
        isEmpty={isEmpty}
        setCpasswordError={setCpasswordError}
      />
      <CustomInputE
        errorPhoneMsg={errorPhoneMsg}
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        isEmpty={isEmpty}
        setErrorPhoneMsg={setErrorPhoneMsg}
      />
      <QtAccept className="accept">
        <FormControlLabel
          control={
            <CheckboxStyle
              disabled={!checkboxEnabled}
              onClick={handleCheckboxClick}
            />
          }
          label={
            <p>
              <span> I accept the </span>
              Evento Terms Of Service, Community Guidelines
              <span> and have read the </span>Privacy Policy.
            </p>
          }
        />
      </QtAccept>
      <CreateAccBtn className="create-acc">
        <StyledButton onClick={handleSubmit} style={{ opacity: buttonOpacity }}>
          <p> Create Account</p>
        </StyledButton>
      </CreateAccBtn>
    </FormCont>
  );
};

export default AccountForm;
