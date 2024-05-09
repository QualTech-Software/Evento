import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { group2, icon } from "../../../assets";
import "../components/Login.css";
import SuccessModal from "../components/LoginSuccessModal";
import LoginErrorModal from "../components/LoginErrorModal";
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
import { connect } from "react-redux";
import { loginRequest } from "../redux/action/LoginAction";

const RightContainer = ({ loginRequest, state }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const { login } = state;
    if (1 == login.requestCompleted) {
      if (1 == login.isLoggedIn && login?.userData?.token != "") {
        handleLoginSuccess(); // Show success modal
      } else {
        handleLoginFailure("Invalid username or password. Please try again."); // Show error modal
      }
    }
  }, [state]);
  useEffect(() => {
    if (email && password) {
      setButtonOpacity(1);
    } else {
      setButtonOpacity(0.5);
    }
  }, [email, password]);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleCloseSuccessModal = () => {
    setModalOpen(false);
    navigate("/");
  };
  const handleLoginSuccess = (token) => {
    setModalMessage("Login successful!");
    setModalOpen(true); // Open the modal
    
    sessionStorage.setItem("token", token);
   
    setTimeout(() => {
      setModalOpen(false);
      navigate("/");
    }, 10000);
  };

  const handleLoginFailure = (errorMessage) => {
    setModalMessage(errorMessage);
    setModalOpen(true);
  };

  const handleLogin = () => {
    const response = loginRequest({ email, password });
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
        <p>Log in</p>
      </QThead>

      <StyledForm>
        <input
          placeholder="John@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </StyledForm>

      <StyledForm>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </StyledForm>

      <CreateAccBtn className="create-acc">
        <StyledButton onClick={handleLogin} style={{ opacity: buttonOpacity }}>
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
        {modalMessage === "Login successful!" ? (
          <SuccessModal handleCloseModal={handleCloseSuccessModal} />
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

const mapStateToProps = (state) => ({
  state: state, // assuming state contains the necessary login information
});

export default connect(mapStateToProps, { loginRequest })(RightContainer);
