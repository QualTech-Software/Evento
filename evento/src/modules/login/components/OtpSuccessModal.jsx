import React from "react";
import { success, OkBtn } from "../../../../public/assets";

import {
  StyledRedModalButton,
  StyledMainBox,
  StyledSubSuccessBox,
} from "./atoms";

const OtpSuccessModal = ({ modalOpen, handleCloseModal, modalMessage }) => {
  return (
    modalOpen && (
      <StyledMainBox style={{ marginTop: "-230px" }}>
        <StyledRedModalButton onClick={handleCloseModal}>
          <img src={OkBtn} alt="Close Button" />
        </StyledRedModalButton>
        <StyledSubSuccessBox>
          <img src={success} />
          <h2>{modalMessage}</h2>
          <p>
            Your OTP is successfully verify You can close this window and
            continue using the product.
          </p>
        </StyledSubSuccessBox>
      </StyledMainBox>
    )
  );
};

export default OtpSuccessModal;
