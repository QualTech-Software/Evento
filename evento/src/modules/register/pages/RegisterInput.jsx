import React from "react";
import icon from "../../../../public/assets/danger.png";
import {
  StyledTextField,
  StyledTextFieldPass,
  StyledTextFieldPhone,
  StyledTextFieldCpass,
  CustInputB,
  CustInputC,
  CustInputD,
  CustInputE,
} from "../components/atoms";
import {
  validateFullName,
  validatePass,
  validateCpass,
  validateCon,
} from "../utils/FormValidation";

export const CustomInputB = ({
  firstNameError,
  lastNameError,
  firstName,
  lastName,
  handleFirstName,
  handleLastName,
  isEmpty,
  setFirstNameError,
  setLastNameError,
}) => {
  const handleBlurFirstName = () => {
    if (!firstName) {
      setFirstNameError("Please enter first name");
    } else {
      setFirstNameError("");
    }
  };

  const handleBlurLastName = () => {
    if (!lastName) {
      setLastNameError("Please enter last name");
    } else {
      setLastNameError("");
    }
  };

  return (
    <CustInputB className="custom-inputb">
      <label htmlFor="firstName">First Name</label>
      <div className="input-wrapper1">
        <StyledTextField
          className={firstNameError ? "textfieldlname error" : "textfieldlname"}
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstNameError(""); // Clear error when typing
          }}
          placeholder={firstNameError ? firstNameError : "Ketan"}
          onBlur={handleBlurFirstName}
        />
        {isEmpty && !firstName && (
          <div className="icon-wrapper" style={{ marginTop: "-7px" }}>
            <img
              src={icon}
              alt="icon"
              className="error-icon"
              style={{ marginLeft: "93px" }}
            />
          </div>
        )}
      </div>

      <div className="input-wrapper2">
        <label htmlFor="lastName">Last Name</label>

        <StyledTextField
          className={lastNameError ? "textfieldlname error" : "textfieldlname"}
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastNameError(""); // Clear error when typing
          }}
          placeholder={lastNameError ? lastNameError : "Jagtap"}
          onBlur={handleBlurLastName}
        />
        {isEmpty && !lastName && (
          <div className="icon-wrapper" style={{ marginTop: "-7px" }}>
            <img
              src={icon}
              alt="icon"
              className="error-icon"
              style={{ marginLeft: "93px" }}
            />
          </div>
        )}
      </div>
    </CustInputB>
  );
};

export const CustomInputC = ({
  passwordError,
  password,
  handlePassword,
  isEmpty,
  setPasswordError,
}) => (
  <CustInputC className="custom-inputc">
    <label htmlFor="field3">Password</label>
    <div className="input-wrapper">
      <StyledTextFieldPass
        className={passwordError ? "textfield error" : "textfield"}
        placeholder="Ketan@123"
        type={passwordError ? "text" : "password"}
        id="field3"
        value={passwordError ? passwordError : password}
        onChange={(e) => {
          handlePassword(e);
          setPasswordError("");
        }}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => {
          e.target.placeholder = passwordError ? "" : "Ketan@123";
          validatePass(password, setPasswordError);
        }}
      />
      {isEmpty && !password && (
        <div className="icon-wrapper">
          <img src={icon} alt="icon" className="error-icon" />
        </div>
      )}
      {passwordError && (
        <div className="error-message">
          <img src={icon} alt="icon" className="error-icon" />
        </div>
      )}
    </div>
    <div className="input-bottom"></div>
  </CustInputC>
);

export const CustomInputD = ({
  cpasswordError,
  cpassword,
  handleCpassword,
  isEmpty,
  setCpasswordError,
  password,
}) => (
  <CustInputD className="custom-inputd">
    <label htmlFor="field4">Confirm Password</label>
    <div className="input-wrapper">
      <StyledTextFieldPhone
        className={cpasswordError ? "textfield error" : "textfield"}
        placeholder="Ketan@123"
        type={cpasswordError ? "text" : "password"}
        id="field4"
        value={cpasswordError ? cpasswordError : cpassword}
        onChange={(e) => {
          handleCpassword(e);
          setCpasswordError("");
        }}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => {
          e.target.placeholder = cpasswordError ? "" : "Ketan@123";
          console.log(password, cpassword);
          validateCpass(password, cpassword, setCpasswordError);
        }}
      />
      {isEmpty && !cpassword && (
        <div className="icon-wrapper">
          <img src={icon} alt="icon" className="error-icon" />
        </div>
      )}
      {cpasswordError && (
        <div className="error-message">
          <img src={icon} alt="icon" className="error-icon" />
          <p>{cpasswordError}</p>{" "}
        </div>
      )}
    </div>
    <div className="input-bottom"></div>
  </CustInputD>
);

export const CustomInputE = ({
  errorPhoneMsg,
  phoneNumber,
  handlePhoneNumberChange,
  isEmpty,
  setErrorPhoneMsg,
}) => (
  <CustInputE className="custom-inpute">
    <label htmlFor="field5">Phone Number</label>
    <div className="input-wrapper">
      <StyledTextFieldCpass
        className={errorPhoneMsg ? "textfieldphone error" : "textfieldphone"}
        placeholder="+91 72666028800"
        type="text"
        id="field5"
        value={errorPhoneMsg ? errorPhoneMsg : phoneNumber}
        onChange={(e) => {
          handlePhoneNumberChange(e);
          setErrorPhoneMsg("");
        }}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => {
          e.target.placeholder = errorPhoneMsg ? "" : "+91 72666028800";
          validateCon(phoneNumber, setErrorPhoneMsg);
        }}
      />
      {isEmpty && !phoneNumber && (
        <div className="icon-wrapper">
          <img src={icon} alt="icon" className="error-icon" />
        </div>
      )}
      {errorPhoneMsg && (
        <div className="error-message">
          <img src={icon} alt="icon" className="error-icon" />
        </div>
      )}
    </div>
    <div className="input-bottom"></div>
  </CustInputE>
);
