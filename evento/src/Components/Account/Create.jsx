import React, { useState } from "react";
import "../Account/Create.css";
import { useNavigate } from "react-router-dom";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const Create = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("Invalid email address");
      return;
    } else {
      navigate("/account");
    }
  };

  return (
    <>
      <div className="qt-create qt-account-main-container">
        <LeftContainer />
        <RightContainer
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Create;
