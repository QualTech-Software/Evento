import React from "react";
import { danger, OkBtn } from "../../../../public/assets";
import {
  StyledModalButton,
  StyledInvalidText,
  StyledMainErrorBox,
  StyledSubErrorBox,
  StyleErrorTypography,
} from "./atoms";

const OtpErrorModal = ({ modalOpen, handleCloseModal, modalMessage }) =>
  modalOpen && (
    <StyledMainErrorBox style={{ marginTop: "-230px" }}>
      <StyledSubErrorBox>
        <img src={danger} alt="Danger Icon" />
        <StyleErrorTypography variant="body1">
          <p> {modalMessage}</p>
        </StyleErrorTypography>
      </StyledSubErrorBox>

      <StyledModalButton onClick={handleCloseModal} sx={{ mt: 2 }}>
        <img src={OkBtn} alt="Close Button" />
      </StyledModalButton>

      <StyledInvalidText>
        <hr />
        <h4>Oops!</h4>
        <p>Enter the correct OTP to verify your account details.</p>
      </StyledInvalidText>
    </StyledMainErrorBox>
  );

export default OtpErrorModal;
