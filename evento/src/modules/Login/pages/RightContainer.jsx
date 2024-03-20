import React from "react";
import { TextField, Button } from "@mui/material";
import group2 from "../../../assets/Group2.png";
import "../components/Login.css";
import icon from "../../../assets/Googleicon.png";

const RightContainer = ({
  email,
  handleEmailChange,
  handleSubmit,
  handlePassword,
  password,
}) => {
  return (
    <div className="qt-account-right-container">
      <div className="qt-logo">
        <div className="qt-para">
          <p>
            If you don’t have an account register You can{" "}
            <span>
              <a href="./Account">Register here!</a>
            </span>
          </p>
        </div>
        <div className="qt-head">
          <p>Log In</p>
        </div>

        <div className="form-container">
          <div className="custom-input1">
            <label
              htmlFor="field1"
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Open Sans",
                marginLeft: "25px",
              }}
            >
              Email address
            </label>
            <input
              type="email"
              id="field1"
              value={email} // Add value prop to bind the input field to the email state
              onChange={handleEmailChange}
              style={{
                // width: "444px",
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "1px ",
                borderRadius: "8px",
                paddingLeft: "26px",
              }}
            />
            {/* <div className="input-bottom"></div> */}
          </div>
        </div>
        <div className="form-container1">
          <div className="custom-input1">
            <label
              htmlFor="field1"
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Open Sans",
                marginLeft: "25px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="field1"
              value={password}
              onChange={handlePassword}
              style={{
                // width: "444px",
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "1px ",
                borderRadius: "8px",
                paddingLeft: "26px",
              }}
            />
            <div className="input-bottom"></div>
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          style={{
            width: "449px",
            height: "56px",
            top: "25px",
            backgroundColor: "rgba(30, 10, 60, 1)",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "center",
              textTransform: "capitalize",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            Continue
          </p>
        </Button>
        <img
          src={group2}
          alt="Group 2"
          style={{
            width: "449px",
            height: "32px",
            top: "45px",
            borderRadius: "50px",
            position: "relative",
          }}
        />
        <p
          style={{
            top: "-2px",
            position: "relative",
            left: "220px",
            fontSize: "16px",
            fontFamily: "Open Sans",
            fontWeight: "600",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Or
        </p>
        <Button
          style={{
            width: "449px",
            height: "56px",
            top: "20px",
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid rgba(171, 171, 171, 1)",
            borderRadius: "8px",
          }}
        >
          <img
            src={icon}
            alt="Google Icon"
            style={{
              width: "24px",
              height: "24px",
              top: "17px",
              margin: "10px",
              paddingRight: "10px",
            }}
          />
          <div className="singin">
            <p>Sign in with Google </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default RightContainer;
