import React, { useState } from "react";
import { TextField, Button, Modal, Box, Typography } from "@mui/material";
import group2 from "../../../assets/Group2.png";
import "../components/Login.css";
import icon from "../../../assets/Googleicon.png";
import danger from "../../../assets/danger.png";
import Closebtn from "../../../../public/assets/CloseBtn.png";

import axios from "axios";
import {
  StyledRightcontainer,
  StyledLogo,
  StyledForm,
  QTpara,
  StyledButton,
  Styleddivider,
  QThead,
  CreateAccBtn,
  Styledgooglebutton,
  ErrorText,
  StyledModalButton,
  StyledInvalidText,
} from "../components/atoms";
import { Link, useNavigate } from "react-router-dom";

const validateCredentials = (email, password) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for password validation
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    return "invalid username or password. Please try again.";
  } else {
    return ""; // No error
  }
};

const RightContainer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State to store modal message
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const validateForm = () => {
    setButtonOpacity(1);

    const error = validateCredentials(email, password);

    if (error) {
      setModalMessage(error);
      setModalOpen(true);
      return;
    }

    axios
      .post(
        "http://localhost:3000/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data && response.data.msg === "Logged in!") {
            navigate("/");
          } else {
            console.log("Email or password is incorrect");
          }
        } else {
          console.log("Unexpected response:", response);
        }
        setEmailError(""); // Clear email error if login request succeeds
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server error:", error.response.data);
        } else if (error.request) {
          console.error("Network error:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <StyledRightcontainer>
      <StyledLogo>
        <img src="../../../assets/LOGO.png" alt="" />
      </StyledLogo>
      <QTpara>
        <p>
          If you don’t have an account register You can{" "}
          <Link to={"/create"}>Register here!</Link>
        </p>
      </QTpara>
      <QThead className="qt-head">
        <p>Log In</p>
      </QThead>

      <StyledForm>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(validateCredentials(e.target.value, password));
          }}
        />
        {emailError && (
          <ErrorText className="error-message">{emailError}</ErrorText>
        )}
      </StyledForm>

      <StyledForm>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(validateCredentials(email, e.target.value));
          }}
        />
        {passwordError && (
          <ErrorText className="error-message">{passwordError}</ErrorText>
        )}
      </StyledForm>

      <CreateAccBtn className="create-acc">
        <StyledButton onClick={validateForm} style={{ opacity: buttonOpacity }}>
          <p>Continue</p>
        </StyledButton>
      </CreateAccBtn>
      <Styleddivider>
        <img src={group2} alt="Group 2" />
        <p>Or</p>
      </Styleddivider>
      <Styledgooglebutton>
        <img src={icon} alt="Google Icon" />
        <p>Log in with Google Account</p>
      </Styledgooglebutton>

      {/* Modal for displaying error messages */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "relative",
            top: "12%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 720,
            height: "131px",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "0px 0px 8px 8px",
            p: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "left", mb: 2 }}>
            <img
              src={danger}
              alt="Danger Icon"
              style={{
                marginRight: "2px",
                height: "24px",
                width: "24px",
                marginLeft: "126px",
              }}
            />

            <Typography variant="h6" component="h2" gutterBottom></Typography>
          </Box>
          <Typography
            variant="body1"
            style={{ color: "red", marginTop: "-38px", marginLeft: "160px" }}
          >
            {modalMessage}
          </Typography>
          <StyledModalButton onClick={handleCloseModal} sx={{ mt: 2 }}>
            <img src={Closebtn} />
          </StyledModalButton>

          <StyledInvalidText>
            <hr
              style={{
                marginTop: "8px",
                width: "776px",
                marginLeft: "-29px",

                borderTop: "0.5px solid red",
              }}
            />

            <h4>Oops!</h4>
            <p>Enter the correct email address and password to log in</p>
          </StyledInvalidText>
        </Box>
      </Modal>
    </StyledRightcontainer>
  );
};

export default RightContainer;
