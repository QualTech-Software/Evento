// LeftContainer.js
import React from "react";
import backbtn from "../../../public/assets/Backbtn.png";
import "../../Components/Account/Create.css";
import { useNavigate } from "react-router-dom";
const LeftContainer = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="qt-form qt-account-left-container">
      <div className="qt-back">
        <img src={backbtn} alt="Back" onClick={handleHome} />
      </div>
    </div>
  );
};

export default LeftContainer;
