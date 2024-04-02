import React, { useState } from "react";
import { Modal } from "@mui/material";
import group2 from "../../../assets/Group2.png";
import "../components/Login.css";
import icon from "../../../assets/Googleicon.png";
import SuccessModal from "../components/LoginSuccessModal";
import axios from "axios";
import {
  StyledRightcontainer,
  StyledLogo,
  StyledForm,
  QTpara,
  StyledButton,
  StyledDivider,
  QThead,
  CreateAccBtn,
  StyledGoogleBtn,
  ErrorText,
} from "../components/atoms";
import { Link, useNavigate } from "react-router-dom";
import LoginErrorModal from "../components/LoginErrorModal";

const validateCredentials = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    return "Invalid username or password please try again.";
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
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleSuccessModalClose = () => {
    setModalOpen(false);
    setIsLoginSuccess(false); // Reset login success state
    navigate("/");
  };

  const handleLoginSuccess = () => {
    setIsLoginSuccess(true);
    setModalOpen(true); // Open the modal
    setTimeout(() => {
      setIsLoginSuccess(false);
      setModalOpen(false);
      navigate("/");
    }, 10000);
  };

  const handleLoginFailure = (errorMessage) => {
    setModalMessage(errorMessage);
    setModalOpen(true); // Open the modal
  };

  const validateForm = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setButtonOpacity(1); // Set opacity to full
    } else {
      setButtonOpacity(0.5); // Set opacity to half
    }
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
    const loginSuccess = true; // Change to false to simulate login failure

    if (loginSuccess) {
      handleLoginSuccess();
    } else {
      handleLoginFailure("Invalid username or password please try again.");
    }
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
      <StyledDivider>
        <img src={group2} alt="Group 2" />
        <p>Or</p>
      </StyledDivider>
      <StyledGoogleBtn>
        <img src={icon} alt="Google Icon" />
        <p>Log in with Google Account</p>
      </StyledGoogleBtn>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        {isLoginSuccess ? (
          <SuccessModal handleCloseModal={handleSuccessModalClose} />
        ) : (
          <LoginErrorModal
            handleCloseModal={handleCloseModal}
            modalMessage={modalMessage}
          />
        )}
      </Modal>
    </StyledRightcontainer>
  );
};

export default RightContainer;
