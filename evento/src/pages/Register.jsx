import React, { useState } from "react";
import LeftContainer from "../modules/common/LeftContainer";
import AccountForm from "../modules/register/AccountForm";
import { useNavigate } from "react-router-dom";
import {
  QtAcc,
  QtRight,
  QtLogo,
  QtPara,
  QtHead,
} from "../modules/register/components/atoms";
const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorPhoneMsg, setErrorPhoneMsg] = useState(""); // New state for phone number error
  const [errorCpassMsg, setErrorCpassMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIsEmpty(false); // Clear isEmpty state when name is updated
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <QtAcc className="qt-acc">
        <LeftContainer />
        <QtRight className="qt-right">
          <QtLogo className="qt-logo">
            <QtPara className="qt-para">
              <p>
                If you already have an account register You can{" "}
                <span>Login here !</span>
              </p>
            </QtPara>
            <QtHead className="qt-head">
              <p>Create an account</p>
            </QtHead>
            <AccountForm
              email={email}
              handleEmail={(e) => {
                setEmail(e.target.value);
                setIsEmpty(false);
              }}
              firstName={firstName}
              lastName={lastName}
              handleFirstName={handleFirstName}
              handleLastName={handleLastName}
              name={name}
              handleName={handleNameChange}
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
              errorCpassMsg={errorCpassMsg} // Pass the new state variable
              setErrorCpassMsg={setErrorCpassMsg} // Pass the setter function
              handleCreateAccount={() => {
                // handle create account logic here
              }}
            />
          </QtLogo>
        </QtRight>
      </QtAcc>
    </>
  );
};

export default Register;
