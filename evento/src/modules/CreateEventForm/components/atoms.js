// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");
import {
  CardMedia,
  Fade,
  IconButton,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Dialog } from "@mui/material";

import styled from "styled-components";

//createeventform
export const NewEvent = styled.div`
  width: 1440px;
  // height: 94px;
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
  // top: -52px;
  left: 64px;
  display: flex;
  gap: 138px;
`;

export const StyledNewEventh1 = styled.h1`
  width: 391px;
  // height: 54px;
  // top: -61px;
  left: 64px;
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;
export const InfoLabel = styled.p`
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
export const StyledVenueNames = styled.div`
  display: grid;
  gap: 20px;
  width: 928px;
  position: absolute;
  z-index: 1;
  background: white;
  /* padding: 27px; */
  /* border: 1px solid #ccc; */
  left: 64px;
  margin-top: 20px;
  border-radius: 8px;
`;
export const StyledVenueTextfield = styled(TextField)`
  z-index: 1000;
  border-radius: 8px;
`;

//Edit.js
export const StyledCreateEvent = styled.div`
  width: 1440px;
  height: 1160px;
  margin: auto;
  position: relative;
  font-family: "open sans";
`;
export const Styledeventh5 = styled.h5`
  height: 25px;
  position: relative;
  left: 64px;
  // font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;
export const StyledEventTitle = styled.div`
  width: 900px;
  // height: 77px;
  position: relative;
  left: 64px;
  &.error {
    .error-message {
      position: relative;
      display: block;
      margin-top: 15px;
      color: red;
      font-size: 12px;
      // font-family: "Open Sans";
    }

    input {
      border-color: red; /* Make the input border red */
    }
  }
`;
export const StyledEventCategory = styled.div`
  width: 900px;
  // height: 77px;
  position: relative;
  left: 64px;
  top: 16px;
`;
export const StyledDropdownMenu = styled.div`
  position: relative;
  top: -10px;
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
    // font-family: "Open Sans", sans-serif;
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
  // height: 198px;
  position: relative;
  margin-top: 31px;
  left: 64px;
  display: grid;
  gap: 16px 24px;
  grid-template-columns: auto auto;
`;
export const StyledEventStartTime = styled.div`
  // font-family: "Open Sans", sans-serif;
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
  // font-family: "Open Sans", sans-serif;
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
  // font-family: "Open Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
`;

export const StyledEventLocationTitle = styled.div`
  width: 900px;
  // height: 77px;
  position: relative;
  left: 64px;
`;
export const StyledLocationLabel = styled.label`
  height: 19px;
  // font-family: "Open Sans";
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
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
export const StyledEventButtonP = styled.p`
  width: 143px;
  height: 25px;
  // font-family: "Open Sans", sans-serif;
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
  width: 877px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid rgba(130, 130, 130, 0.7);
  &::placeholder {
    color: #ccc;
    font-size: 16px;
    // font-family: "open sans";
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
  }
  &:focus {
    border: 1px solid #0076b8;
  }
`;
export const StyledEventLabel = styled.label`
  // font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: rgba(45, 44, 60, 1);
`;
export const StyledEventinput = styled.input`
  width: 900px;
  height: 56px;
  // font-family: "Open Sans";
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
  border: 1px solid ${({ showError }) => (showError ? "red" : "#ccc")};
`;
export const StyledCategoryLabel = styled.label`
  height: 19px;
  // font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: rgba(45, 44, 60, 1);
  position: relative;
`;
export const StyledCategoryInput = styled.input`
  width: 900px;
  height: 56px;
  // font-family: "Open Sans", sans-serif;
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
    // font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  border: 1px solid ${({ showError }) => (showError ? "red" : "#ccc")};
`;
export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  // font-family: "Open Sans";
`;
export const StyledLocationError = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  // font-family: "Open Sans";
`;
export const StyledLocationInput = styled.input`
  width: 900px;
  height: 56px;
  // font-family: "Open Sans";
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
    // font-family: "Open Sans";
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  border: 1px solid ${({ showError }) => (showError ? "red" : "#ccc")};
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
    // font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    top: -30px; /* Adjust the positioning as needed */
  }
`;
export const StyledDialogTypography = styled(Typography)`
  display: flex;
  p {
    color: red;
    margin-left: 12px !important;
    margin-top: 21px !important;
    margin-right: 252px;
    // font-family: "Open Sans";
  }
  img {
    height: 24px;
    width: 24px;
    margin-left: 309px;
    margin-top: 20px;
  }
`;
export const StyledDialogbox = styled(Box)`
  display: flex;
  height: 64px;
`;
export const StyledpopupText = styled.div`
  h4 {
    // font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 32.68px;
    text-align: center;
    margin-top: 9px;
  }
  p {
    // font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    text-align: center;
    margin-top: -17px;
  }
`;
export const StyledMainErrorBox = styled(Box)`
  position: relative;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 151px;
  background-color: white;
  box-shadow: 24;
  border-radius: 0px 0px 8px 8px;
  p: 4;
  hr {
    width: 718px;
    border-top: 0.5px solid red;
        margin-top: 0px;
}
  }
`;
export const StyledDialogButton = styled.button`
  height: 40px;
  width: 40px;
  // margin-top: 16px;
  // margin-right: 16px;
  background-image: url("../../../../public/assets/RedClosebtn.png");
  background-size: 40px 40px;
  border: none;
  margin-top: 16px;
  // img {
  //   height: 40px;
  //   width: 40px;
  // }
`;
//Tickets

export const StyledTicketIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  // margin-top: 8px;
  margin-left: 106px;
  filter: brightness(${({ isSelected }) => (isSelected ? "0" : "1")});
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

export const StyledTicketLabel = styled.label`
  // font-family: Open Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 32.68px;
  text-align: left;
  color: ${({ isSelected }) =>
    isSelected ? "black" : "rgba(171, 171, 171, 1)"};
  position: relative;
  cursor: pointer;
  top: 11px;
  left: 45px;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;
export const StyledTicketContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 237px;
  cursor: pointer;
  display: grid;
  position: relative;

  &:hover {
    border: 2px solid red; /* Change border on hover */
  }

  &:hover > ${StyledTicketIcon} {
    filter: brightness(0);
  }

  &:hover > ${StyledTicketLabel} {
    color: black;
  }
  &.selected {
    border-color: green; /* Change border color to green when selected */
    ${StyledTicketIcon} {
      font-weight: bold;
      filter: brightness(0);
    }
    ${StyledTicketLabel} {
      color: black; /* Make label black when selected */
    }
  }
`;
export const StyledEventTicketContainer = styled.div`
  position: relative;
  margin-left: 64px;
`;
export const StyledTicketHeading = styled.h2`
  // font-family: "Open Sans";
  font-size: 24px;
  font-weight: 600;
  line-height: 32.68px;
`;
export const StyledTickets = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledGreenTick = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid green;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "\\2713";
    color: green;
    font-size: 14px;
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
  // font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24.51px;
  text-align: left;
  position: relative;
`;

export const BannerDescription = styled.p`
  // font-family: "Open Sans", sans-serif;
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
  // font-family: "Open Sans", sans-serif;
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

  // font-family: "Open Sans", sans-serif;
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
  // font-family: "Open Sans", sans-serif;
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
    // font-family: "Open Sans", sans-serif;
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
  // font-family: "Open Sans", sans-serif;
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
//Review

export const StyledMainContainer = styled.div`
  width: 1312px;
  margin: auto;
  // margin-top: 100px;
`;
export const StyledSlickCarousel = styled.div`
  margin: 0 auto;

  img {
    width: 1312px;
    height: 500px;
    border-radius: 0px 0px 8px 8px;
  }
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li {
    width: 300px;
    height: 8px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  .slick-dots li button {
    width: 300px;
    height: 8px;
    color: #9747ff;
    background: #9747ff;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3); /* Default dot color */
    outline: none;
    transition: background-color 0.3s ease;
  }
  .slick-dots li button:before {
    content: "";
  }
  .slick-dots li.slick-active button {
    background-color: #9747ff; /* Active dot color */
  }
  /* Blur inactive dots */
  .slick-dots li:not(.slick-active) {
    background: #ffffff;
    width: 300px;
    height: 8px;
    opacity: 25%;
    border-radius: 8px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: relative !important;
  border-radius: 50%;
  margin: 10px 0px 0px 698px;
  z-index: 1;
  background-color: #ababab;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #9747ff;
    // background-image: url("../../../assets/iconVector.png") !important;
  }
`;
export const StyledMainBlock = styled.div`
  width: 1312px;
  margin: auto;
  margin-top: 16px;
`;

export const StyledFirstContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const StyledFirstContainer1 = styled.div`
  margin-left: 16px;
`;
export const StyledHeading1 = styled.h1`
  font-family: Open Sans;
  font-size: 40px;
  font-weight: 700;
  line-height: 54.47px;
  text-align: left;
  color: #1e0a3c;
  margin: 0px 0px 16px 0px;
`;
export const StyledHeading3 = styled.h3`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 32.68px;
  text-align: left;
  color: #1e0a3c;
  margin: 0px 0px 16px 0px;
`;
export const StyledParagraph = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.79px;
  text-align: left;
  color: #000;
  margin: 16px 0px;
`;
export const StyledRedButton = styled.button`
  width: auto;
  height: 56px;
  background-color: #ff0000;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 27.24px;
  text-align: center;

  :hover {
    background-color: #1e0a3c;
  }
`;
export const StyledFollowButton = styled.button`
  width: 124px;
  height: 56px;
  background-color: #1e0a3c;
  color: #fff;
  border-radius: 8px;
  margin-left: 20px;
  border: none;
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 27.24px;
  text-align: center;
  :hover {
    background-color: #ff0000;
  }
`;
export const StyledParagraphTags = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.79px;
  text-align: left;
  color: #000;
  margin: 16px 0px;
  width: 175px px;
  height: 46px px;
  padding: 12px 28px 12px 28px;
  border-radius: 50px 0px 0px 0px;
`;
export const StyledAboutEvent = styled.div`
  display: flex;
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    // margin-left: 24px;
    border-radius: 8px 0px 0px 0px;
  }
`;
export const StyledIconButton1 = styled(IconButton)`
  position: relative !important;
  border-radius: 50%;
  margin: 10px 0px 0px 5px;
  z-index: 1;
  background-color: #1e0a3c;
  width: 40px;
  height: 40px;
  :hover {
    background-color: #1e0a3c;
  }
`;
export const StyledHeading = styled.h4`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 24.51px;
  text-align: left;
  color: white;
  margin-left: 8px;
`;
export const StyledFirstContainer2 = styled.div`
  margin-left: 506px;
  background-color: red;
  border-radius: 8px;
  width: 308px;
`;
