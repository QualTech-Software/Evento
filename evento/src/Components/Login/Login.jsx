import React from "react";
import "../Login/Login.css";
import backbtn from "../../assets/back_button.png";
import { TextField, Button } from "@mui/material";
import group2 from "../../assets/group2.png";
import icon from "../../assets/Googleicon.png";

const Login = () => {
  return (
    <>
      <div className="ev-login ev-login-main-container">
        <div className="ev-form ev-login-left-container">
          <div className="ev-back">
            <img src={backbtn} />
          </div>
        </div>
        <div className="ev-login-right-container">
          <div className="ev-logo">
            <div className="ev-para">
              <p>
                If you don’t have an account register You can{" "}
                <span>
                  <a href="/">Register here!</a>
                </span>
              </p>
            </div>
            <div className="ev-head">
              <p>Log In</p>
            </div>
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
                type="text"
                id="field1"
                style={{
                  width: "449px",
                  height: "30px",
                  top: "260px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  border: "1px",
                  borderRadius: "8px",
                }}
              />
              <div className="input-bottom"></div>
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
                type="text"
                id="field1"
                style={{
                  width: "449px",
                  height: "30px",
                  top: "20px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  border: "1px",
                  borderRadius: "8px",
                }}
              />
              <div className="input-bottom"></div>
            </div>
          </div>
          {/* <input
              htmlFor="Email Address"
              placeholder="Password"
              type="email"
              style={{
                width: "449px",
                height: "56px",
                top: "111px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "1px",
                borderRadius: "8px",
                position: "relative",
              }}
            /> */}

          <Button
            style={{
              width: "449px",
              height: "56px",
              top: "135px",
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
            style={{
              width: "449px",
              height: "32px",
              top: "155px",
              borderRadius: "50px",
              position: "relative",
            }}
          />
          <p
            style={{
              top: "110px",
              position: "relative",
              left: "220px",
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 1)",
            }}
          ></p>
          <Button
            style={{
              width: "449px",
              height: "56px",
              top: "160px",
              position: "relative",
              backgroundColor: "rgba(255, 255, 255, 1)",
              border: "1px solid rgba(171, 171, 171, 1)",
              borderRadius: "8px",
            }}
          >
            <img
              src={icon}
              style={{
                width: "24px",
                height: "24px",
                top: "17px",
                margin: "10px",
              }}
            />
            <div className="signin">
              <p>Sign in with Google Account</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
