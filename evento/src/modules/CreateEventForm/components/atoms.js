// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");
import { CardMedia, Fade, IconButton, Dialog } from "@mui/material";
import styled from "styled-components";

//createeventform
export const NewEvent = styled.div`
  width: 1440px;
  height: 94px;
  margin: auto;
`;
export const StyledArrow = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  top: 27px;
  left: 64px;
  padding: 10px;
  border-radius: 50px;
`;
export const EventEdit = styled.div`
  width: 1310px;
  height: 67px;
  position: relative;
  top: -52px;
  left: 64px;
  display: flex;
  gap: 138px;
`;

export const StyledNewEventh1 = styled.h1`
  width: 391px;
  height: 54px;
  top: -61px;
  left: 124px;
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;
export const EditLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32.68px;
  text-align: center;
  color: rgba(30, 10, 60, 1);
`;

export const CommonLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32.68px;
  text-align: center;
  color: rgba(171, 171, 171, 1);
`;
//Edit.js
export const StyledCreateEvent = styled.div`
  width: 1440px;
  height: 1160px;
  margin: auto;
  position: relative;
`;
export const Styledeventh5 = styled.h5`
  height: 25px;
  position: relative;
  left: 64px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;
export const StyledEventTitle = styled.div`
  width: 900px;
  height: 77px;
  position: relative;
  left: 64px;
`;
export const StyledEventCategory = styled.div`
  width: 900px;
  height: 77px;
  position: relative;
  left: 64px;
  top: 16px;
`;
export const StyledDropdownMenu = styled.div`
  position: relative;
  top: -11px;
  width: 923px;
  height: 360px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 1000;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
  overflow-y: scroll;

  &.open {
    max-height: 469px;
  }
`;
export const StyledDropdownItem = styled.div`
  height: 67px;
  padding: 1px 50px 10px 50px;
  gap: 10px;
  cursor: pointer;

  > span {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    top: 20px;
  }
  &:hover {
    background-color: #e6e5e7;
    border-radius: 8px;
  }
`;
export const StyledEventDropdownPlace = styled.div`
  width: 924px;
  height: 182px;
  background-color: white;
  cursor: pointer;
  z-index: 1000;
  position: relative;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;

  &.open {
    max-height: 182px;
  }
`;

export const StyledEventDates = styled.div`
  width: 665px;
  height: 198px;
  position: relative;
  margin-top: 31px;
  left: 64px;
  display: grid;
  gap: 16px 24px;
  grid-template-columns: auto auto;
`;
export const StyledEventStartTime = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;
export const StyledLocationh5 = styled.b`
  height: 25px;
  position: relative;
  margin-left: 64px;
  margin-top: 16px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
`;

export const StyledLocationB = styled.b`
  height: 25px;
  position: relative;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
`;

export const StyledEventLocationTitle = styled.div`
  width: 900px;
  height: 77px;
  position: relative;
  left: 64px;
`;
export const StyledLocationLabel = styled.label`
  height: 19px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: rgba(45, 44, 60, 1);
`;
export const StyledDiscriptionTitle = styled.div`
  width: 1003px;
  gap: 10px;
  position: relative;
  left: 64px;
  margin-top: 16px;
`;

export const StyledEventButton = styled.button`
  width: 191px;
  height: 56px;
  margin-top: 48px;
  left: 1149px;
  padding: 20px 67px 20px 67px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 0, 0, 1);
  position: relative;
  // opacity: ${(props) => (props.isFormComplete ? 1 : 0.5)};
`;
export const StyledEventButtonP = styled.p`
  width: 143px;
  height: 25px;
  font-family: "Open Sans", sans-serif;
  //   font-size: 18px;
  font-weight: 600;
  //   line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  position: relative;
  top: -13.5px;
  left: -40px;
`;
export const StyledTextArea = styled.textarea`
  padding: 14px 24px 14px 24px;
  margin-top: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid rgba(130, 130, 130, 0.7);
  &::placeholder {
    color: #ccc;
    font-size: 16px;
    font-family: "open sans";
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
  }
`;
export const StyledEventLabel = styled.label`
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: rgba(45, 44, 60, 1);
`;
export const StyledEventinput = styled.input`
  width: 900px;
  height: 50px;
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 24px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  outline: none;
  cursor: pointer;
  position: relative;
  top: 8px;
  border-radius: 8px;
  padding-left: 24px;

  &::placeholder {
    color: #ccc;
    font-size: 16px;
  }
  &:focus {
    border-color: #0076b8;
    &::placeholder {
      color: transparent;
    }
  }
`;
export const StyledCategoryLabel = styled.label`
  height: 19px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: rgba(45, 44, 60, 1);
  position: relative;
`;
export const StyledCategoryInput = styled.input`
  width: 900px;
  height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 24px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  outline: none;
  cursor: pointer;
  position: relative;
  top: 8px;
  border-radius: 8px;
  padding-left: 24px;

  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border-color: #ccc;
  }
  &.selected {
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const StyledLocationInput = styled.input`
  width: 900px;
  height: 50px;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 24px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  outline: none;
  cursor: pointer;
  position: relative;
  top: 8px;
  border-radius: 8px;
  padding-left: 24px;

  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border-color: #ccc;
  }
  &.selected {
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const StyledArrowDropdown = styled.img`
  position: relative;
  left: 895px;
  top: -25px;
  transform: translateY(-50%);
  width: 12px;
  height: 9px;
  cursor: pointer;
`;
export const StyledEventVenue = styled.img`
  width: 56px;
  height: 56px;
  padding: 13px;
  border-radius: 70px;
  position: relative;
`;
export const StyledEventOnline = styled.img`
  width: 56px;
  height: 56px;
  padding: 13px;
  border-radius: 70px;
  position: relative;
`;
export const StyledDropdownItems = styled.div`
  > span {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    top: -30px; /* Adjust the positioning as needed */
  }
`;
export const StyledDialogbox = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 8px; /* Set border radius to 8px */
  }
`;
// banner.js
export const EventBanner = styled.div`
  width: 720px;
  height: 271px;
  gap: 0px;
  border-radius: 8px 0px 0px 0px;
  opacity: 0px;
  position: relative;
  margin: auto;
`;
export const BannerHeading = styled.div`
  width: 510px;
  height: 47px;
  position: relative;
  top: 12px;

  gap: 0px;
  opacity: 0px;
`;

export const BannerTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24.51px;
  text-align: left;
  position: relative;
`;

export const BannerDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: left;
  position: relative;
  top: -12px;
`;
export const StyledBannerUpload = styled.div`
  width: 680px;
  height: 156px;
  position: relative;
  top: 12px;

  padding: 12px 12px;
  gap: 8px;
  border-radius: 8px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  border: 1px dashed rgba(24, 73, 214, 1);
`;
export const StyledBannerBrowse = styled.div`
  width: 462px;
  height: 82px;
  left: 109px;
  gap: 8px;
  opacity: 0px;
  position: relative;
`;
export const Styleduploadimage = styled.img`
  width: 42px;
  height: 42px;

  gap: 0px;
  opacity: 0px;
  top: 12px;
  left: 319px;
  position: relative;
`;
export const StyledBrowseP = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: center;
`;
export const StyledUploadedImagesContainer = styled.p`
  width: 680px;
  height: 320px;
  position: relative;
  display: flex;

  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: center;
`;
export const StyledBrowseButton = styled.button`
  width: 105px;
  height: 31px;
  padding: var(--spacingxs) var(--spacingsmd) var(--spacingxs) var(--spacingsmd);
  gap: var(--spacingsm);
  border-radius: 8px;
  border: 1px solid rgba(151, 71, 255, 1);
  opacity: 0px;

  left: 178px;
  position: relative;
  cursor: pointer;
`;
export const StyledBrowseButtonText = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.07px;
  text-align: left;
  color: rgba(151, 71, 255, 1);
`;
export const Styleduploadline = styled.img`
  width: 80px;
  height: 0.97px;
  gap: 0px;
  opacity: 0px;
`;
export const StyledLine = styled.div`
  width: 201px;
  height: 16px;
  display: flex;
  position: relative;
  margin-top: 20px;
  margin-left: 143px;

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.34px;
    text-align: center;
    color: rgba(171, 171, 171, 1);
    position: relative;
    margin-top: -7px;
  }
`;
export const StyledBannerP = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;

  color: rgba(171, 171, 171, 1);
  position: relative;
`;
export const StyledCardMedia = styled(CardMedia)`
  width: 310px;
  height: 310px;
`;
export const StyledImgFade = styled(Fade)`
  width: 624px;
  height: 312px;
  position: relative;
  margin: auto;

  img {
    width: 624px;
    height: 312px;
    position: relative;
    //margin-top: 250px;
  }
`;
