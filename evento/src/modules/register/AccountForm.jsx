import React, { useState, useEffect } from "react";
//import icon from "../../../public/assets/danger.png";
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
  validatePass,
  validateCpass,
  validateCon,
  validateFullName,
} from "./utils/FormValidation";
import {
  CustomInputB,
  CustomInputC,
  CustomInputD,
  CustomInputE,
} from "./pages/RegisterInput";

const AccountForm = ({
  email,
  handleEmail,
  name,
  handleName,
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
  ErrorMsg,
  setErrorMsg,
  errorPhoneMsg,
  setErrorPhoneMsg,
  handleCreateAccount,
  errorCpassMsg,
  setErrorCpassMsg,
}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [checkboxEnabled, setCheckboxEnabled] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(0.5); // Initial opacity
  const [fullNameError, setFullNameError] = useState(""); // State for full name error message
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  useEffect(() => {
    // Check if all fields are filled and set checkboxEnabled accordingly
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

  const handleSubmit = async () => {
    if (!email || !password || !cpassword || !phoneNumber) {
      setIsEmpty(true);
      return;
    }

    //validateFullName(name, setFullNameError); // Validate full name

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        firstName,
        lastName,
        password,
        phoneNumber,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Registration error:", error.response.data.msg); // Handle error response
    }

    const error = validateForm();
    if (error || fullNameError) {
      alert(error || fullNameError);
    } else {
      setIsEmpty(false);
      // handleCreateAccount();
      setCheckboxEnabled(true); // Enable the checkbox
      setButtonOpacity(1); // Increase opacity
    }
  };

  const handleCheckboxClick = () => {
    if (checkboxEnabled) {
      setButtonOpacity(1); // Increase opacity when checkbox is clicked
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
        handleLastName={handleLastName} // Corrected
        firstNameError={firstNameError}
        lastNameError={lastNameError}
        isEmpty={isEmpty}
        setFirstNameError={setFirstNameError}
        setLastNameError={setLastNameError} // Corrected
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
