import React, { useState } from "react";
import LeftContainer from "../Account/LeftContainer";
import "../AccountExtraFields/Account.css";

const Account = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpasssword] = useState("");

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };
  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleCpassword = (event) => {
    const value = event.target.value;
    setCpasssword(value);
  };

  const handleCreateAccount = () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
    if (!name || !password || !cpassword) {
      alert("All fields are required!");
    }
    if (!password.match(passwordRegex)) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special symbol"
      );
      return;
    }
    if (password !== cpassword) {
      alert("password and confirm password must be match");
    }
    if (password.length < 8) {
      alert("password must be greater than 8 characters");
    }
    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits");
    }
  };
  return (
    <>
      <div className="qt-acc">
        <LeftContainer />
        <div className="qt-right">
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
              <div className="custom-inputa">
                <label htmlFor="field1">Email address</label>
                <input type="text" id="field1" />
                <div className="input-bottom"></div>
              </div>
              <div className="custom-inputb">
                <label htmlFor="field2">Full Name</label>
                <input
                  type="text"
                  id="field2"
                  value={name}
                  onChange={handleName}
                />
                <div className="input-bottom"></div>
              </div>
              <div className="custom-inputc">
                <label htmlFor="field3">Password</label>
                <input
                  type="password"
                  id="field3"
                  value={password}
                  onChange={handlePassword}
                />
                <div className="input-bottom"></div>
              </div>
              <div className="custom-inputd">
                <label htmlFor="field4">Confirm Password</label>
                <input
                  type="password"
                  id="field4"
                  value={cpassword}
                  onChange={handleCpassword}
                />
                <div className="input-bottom"></div>
              </div>
              <div className="custom-inpute">
                <label htmlFor="field5">Phone Number</label>
                <input
                  type="text"
                  id="field5"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />

                <div className="input-bottom"></div>
              </div>
              <div className="accept">
                <input type="checkbox" />
                <p>
                  <span> I accept the </span> Evento Terms Of Service, Community
                  Guidelines <span>and have read the </span>Privacy Policy.
                </p>
              </div>
              <div className="create-acc">
                <button onClick={handleCreateAccount}>
                  <p>Create Account</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
