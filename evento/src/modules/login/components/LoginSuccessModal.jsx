import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import success from "../../../../public/assets/Success.png";
import RedBtn from "../../../../public/assets/RedBtn.png";
import { StyledRedModalButton, StyledInvalidText } from "./atoms";

const LoginSuccessModal = ({ modalOpen, handleCloseModal, modalMessage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        top: "12%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "720px",
        height: "259px",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: "0px 0px 8px 8px",
        p: 4,
      }}
    >
      <StyledRedModalButton onClick={handleCloseModal}>
        <img src={RedBtn} alt="Close Button" />
      </StyledRedModalButton>
      <Box
        sx={{
          width: "469px",
          height: "179px",

          marginLeft: "125px",
          border: "1px",
        }}
      >
        <img
          src={success}
          style={{
            width: "80px",
            height: "80px",

            marginLeft: "194px",
          }}
        />
        <h2
          style={{
            fontFamily: "Open Sans",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "32.68px",
            textAlign: "center",
          }}
        >
          LOGIN SUCCESSFULLY
        </h2>
        <p
          style={{
            //styleName: 16 REGULAR SANS;
            fontFamily: "Open Sans",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "21.79px",
            textAlign: "center",
          }}
        >
          You have successfully login into your account. You can close this
          window and continue using the product.
        </p>
      </Box>
    </Box>
  );
};

export default LoginSuccessModal;
