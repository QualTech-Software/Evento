// LeftContainer.js
import React from "react";
import backbtn from "../../assets/Backbtn.png";
// import "../Account/Create.css";

const LeftContainer = () => {
  return (
    <div className="qt-form qt-account-left-container">
      <div className="qt-back">
        <a href="./Home">
          {" "}
          <img src={backbtn} alt="Back" />
        </a>
      </div>
    </div>
  );
};

export default LeftContainer;
