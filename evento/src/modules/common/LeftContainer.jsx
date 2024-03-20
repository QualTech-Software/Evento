// LeftContainer.js
import React from "react";
import backbtn from "../../../public/assets/Backbtn.png";
import "../../Components/Account/Create.css";

const LeftContainer = () => {
  return (
    <div className="qt-form qt-account-left-container">
      <div className="qt-back">
        <img src={backbtn} alt="Back" />
      </div>
    </div>
  );
};

export default LeftContainer;
