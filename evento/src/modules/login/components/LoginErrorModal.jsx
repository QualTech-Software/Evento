import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import danger from "../../../assets/danger.png";
import Closebtn from "../../../../public/assets/CloseBtn.png";
import { StyledModalButton, StyledInvalidText } from "./atoms";

const LoginErrorModal = ({ modalOpen, handleCloseModal, modalMessage }) => {
  return (
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
        <img src={Closebtn} alt="Close Button" />
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
  );
};

export default LoginErrorModal;
