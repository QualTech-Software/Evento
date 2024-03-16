import React, { useState } from "react";
import LeftContainer from "../Account/LeftContainer";
import AccountForm from "./AccountForm";

const Account = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorPhoneMsg, setErrorPhoneMsg] = useState(""); // New state for phone number error

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
            <AccountForm
              email={email}
              handleEmail={(e) => {
                setEmail(e.target.value);
                setIsEmpty(false);
              }}
              name={name}
              handleName={(e) => {
                setName(e.target.value);
                setIsEmpty(false);
              }}
              password={password}
              handlePassword={(e) => {
                setPassword(e.target.value);
                setIsEmpty(false);
              }}
              cpassword={cpassword}
              handleCpassword={(e) => {
                setCpassword(e.target.value);
                setIsEmpty(false);
              }}
              phoneNumber={phoneNumber}
              handlePhoneNumberChange={(e) => {
                setPhoneNumber(e.target.value);
                setIsEmpty(false);
              }}
              isEmpty={isEmpty}
              ErrorMsg={errorMsg}
              setErrorMsg={setErrorMsg}
              errorPhoneMsg={errorPhoneMsg} // Pass the new state variable
              setErrorPhoneMsg={setErrorPhoneMsg} // Pass the setter function
              handleCreateAccount={() => {
                // handle create account logic here
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
