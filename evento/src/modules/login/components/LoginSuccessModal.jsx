import React from "react";
import { success, RedBtn } from "../../../../public/assets";

import {
  StyledRedModalButton,
  StyledMainBox,
  StyledSubSuccessBox,
} from "./atoms";

const LoginSuccessModal = ({ modalOpen, handleCloseModal, modalMessage }) => {
  return (
    <StyledMainBox>
      <StyledRedModalButton onClick={handleCloseModal}>
        <img src={RedBtn} alt="Close Button" />
      </StyledRedModalButton>
      <StyledSubSuccessBox>
        <img src={success} />
        <h2>LOGIN SUCCESSFULLY</h2>
        <p>
          You have successfully login into your account. You can close this
          window and continue using the product.
        </p>
      </StyledSubSuccessBox>
    </StyledMainBox>
  );
};

export default LoginSuccessModal;
