import React, { useState, useEffect } from "react";
import icon from "../../../public/assets/danger.png";
import "../../Components/AccountExtraFields/Account.css";
import axios from "axios";

const AccountForm = ({
  email,
  handleEmail,
  name,
  handleName,
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
}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [checkboxEnabled, setCheckboxEnabled] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(0.5); // Initial opacity

  useEffect(() => {
    // Check if all fields are filled and set checkboxEnabled accordingly
    if (name && password && cpassword && phoneNumber && errorPhoneMsg === "") {
      setCheckboxEnabled(true);
    } else {
      setCheckboxEnabled(false);
    }
  }, [name, password, cpassword, phoneNumber, errorPhoneMsg]);

  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

  const validatePass = () => {
    if (!password.match(passwordRegex)) {
      setErrorMsg("Password not valid");
    } else {
      setErrorMsg("");
    }
  };

  const validateCon = () => {
    if (phoneNumber.length !== 10) {
      setErrorPhoneMsg("Mobile number must be 10 digits");
    } else {
      setErrorPhoneMsg("");
    }
  };

  const validateForm = () => {
    if (!name || !password || !cpassword || !phoneNumber) {
      return "All fields are required";
    }
    return "";
  };

  const handleSubmit = async () => {
    if (!email || !name || !password || !cpassword || !phoneNumber) {
      setIsEmpty(true);
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        name,
        email,
        password,
        phoneNumber,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Registration error:", error.response.data.msg); // Handle error response
    }

    const error = validateForm();
    if (error) {
      alert(error);
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

  return (
    <div className="form-container">
      <div className="custom-inputa">
        <label htmlFor="field1">Email address</label>
        <input type="text" id="field1" value={email} onChange={handleEmail} />
        <div className="input-bottom"></div>
      </div>
      <div className="custom-inputb">
        <label htmlFor="field2">Full Name</label>
        <div className="input-wrapper">
          <input type="text" id="field2" value={name} onChange={handleName} />
          {isEmpty && !name && (
            <div className="icon-wrapper">
              <img src={icon} alt="icon" className="error-icon" />
            </div>
          )}
        </div>
        <div className="input-bottom"></div>
      </div>
      <div className="custom-inputc">
        <label htmlFor="field3">
          {ErrorMsg !== "" ? (
            <span className="error" style={{ color: "red" }}>
              {" "}
              {ErrorMsg}{" "}
            </span>
          ) : (
            <span>Password</span>
          )}
        </label>
        <div className="input-wrapper">
          <input
            type="password"
            id="field3"
            value={password}
            onChange={handlePassword}
            onBlur={validatePass}
          />
          {isEmpty && !password && (
            <div className="icon-wrapper">
              <img src={icon} alt="icon" className="error-icon" />
            </div>
          )}
        </div>
        <div className="input-bottom"></div>
      </div>
      <div className="custom-inputd">
        <label htmlFor="field4">Confirm Password</label>
        <div className="input-wrapper">
          <input
            type="password"
            id="field4"
            value={cpassword}
            onChange={handleCpassword}
          />
          {isEmpty && !cpassword && (
            <div className="icon-wrapper">
              <img src={icon} alt="icon" className="error-icon" />
            </div>
          )}
        </div>
        <div className="input-bottom"></div>
      </div>
      <div className="custom-inpute">
        <label htmlFor="field5">
          {errorPhoneMsg !== "" ? (
            <span className="error" style={{ color: "red" }}>
              {" "}
              {errorPhoneMsg}{" "}
            </span>
          ) : (
            <span>Phone Number</span>
          )}
        </label>
        <div className="input-wrapper">
          <input
            type="text"
            id="field5"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            onBlur={validateCon}
          />
          {isEmpty && !phoneNumber && (
            <div className="icon-wrapper">
              <img src={icon} alt="icon" className="error-icon" />
            </div>
          )}
        </div>
        <div className="input-bottom"></div>
      </div>
      <div className="accept">
        <input
          type="checkbox"
          disabled={!checkboxEnabled}
          onClick={handleCheckboxClick}
        />
        <p>
          <span> I accept the </span> Evento Terms Of Service, Community
          Guidelines <span>and have read the </span>Privacy Policy.
        </p>
      </div>
      <div className="create-acc">
        <button onClick={handleSubmit} style={{ opacity: buttonOpacity }}>
          <p>Create Account</p>
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
