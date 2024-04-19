import React from "react";
import { danger, Closebtn } from "../../../../public/assets";
// import { StyledMainErrorBox } from "../../login/components/atoms";
import {
  StyledDialogbox,
  StyledDialogTypography,
  StyledpopupText,
  StyledDialogButton,
  StyledMainErrorBox,
} from "../components/atoms";

const DialogPopup = ({ modalOpen, handleCloseModal, modalMessage }) => {
  return (
    <StyledMainErrorBox>
      <StyledDialogbox>
        <StyledDialogTypography variant="body1">
          <img src={danger} alt="Danger Icon" />
          <p>{modalMessage}</p>
        </StyledDialogTypography>
        <StyledDialogButton onClick={handleCloseModal}>
          {/* <img src={Closebtn} alt="Close Button" /> */}
        </StyledDialogButton>
      </StyledDialogbox>
      <hr />
      <StyledpopupText>
        <h4>Oops!</h4>
        <p>Please fill in all the details to procced.</p>
      </StyledpopupText>
    </StyledMainErrorBox>
  );
};

export default DialogPopup;
