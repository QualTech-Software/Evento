import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import { TextField, Button, Box, Typography } from "@mui/material";

export const StyledRightcontainer = styled.div`
  display: block;
  width: 551px;
  margin-left: 100px;
`;
export const StyledLogo = styled.div`
  img {
    width: 147px;
    height: 75px;
    margin-top: 40px;
    /* left: 889px; */
    position: relative;
    background-image: url("../../../assets/LOGO.png");
    background-size: cover;
  }
`;
export const QTpara = styled.div`
  width: 351px;
  height: 24px;
  margin-top: 16px;
  p {
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
  p a {
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const QThead = styled.div`
  width: 437px;
  height: 65px;
  position: relative;

  p {
    font-family: "Open Sans";
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 10px;
  }
`;
export const StyledForm = styled.div`
  // width: 449px;
  // height: 720px;
  position: relative;
  float: left;
  margin-top: 20px;
  input {
    width: 425px;

    padding: 20px 0px 20px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const StyledButton = styled(Button)`
  p {
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    left: 151px;
    margin-top: 15px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
  }
  &:hover {
    background-color: rgba(30, 10, 60, 1) !important;
  }
`;
export const CreateAccBtn = styled.div`
  button {
    width: 449px;
    height: 56px;
    border-radius: 8px;
    margin-top: 30px;
    background-color: rgba(30, 10, 60, 1);
  }
  button p {
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    left: 151px;
    margin-top: 15px;
    color: rgba(255, 255, 255, 1);
  }
  button:hover {
    cursor: pointer;
  }
`;
export const StyledDivider = styled.div`
  img {
    width: 449px;
    height: 32px;
    margin-top: 45px;
    border-radius: 50px;
    position: relative;
  }
  p {
    margin-top: -32px;
    position: relative;
    left: 220px;
    font-size: 16px;
    font-family: Open Sans;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
`;
export const StyledGoogleBtn = styled.div`
  width: 449px;
  height: 56px;
  margin-top: 24px;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(171, 171, 171, 1);
  border-radius: 8px;
  img {
    width: 24px;
    height: 24px;
    margin-top: 17px;
    margin-left: 74px;
  }
  p {
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin-left: 116px;
    margin-top: -32px;
  }
`;
export const StyledMainErrorBox = styled(Box)`
  position: relative;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 161px;
  background-color: white;
  box-shadow: 24;
  border-radius: 0px 0px 8px 8px;
  p: 4;
`;
export const StyledSubErrorBox = styled(Box)`
  display: flex;
  align-items: left;

  mb: 2;
  img {
    margin-right: 2px;
    height: 24px;
    width: 24px;
    margin-left: 163px;
    margin-top: 25px;
  }
`;
export const ErrorText = styled.div`
  color: red;
  //styleName: 16 MEDIUM SANS;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.79px;
  text-align: left;
`;
export const StyledModalButton = styled(Button)`
  img {
    height: 40px;
    width: 40px;
    margin-left: 664px;
    margin-top: -109px;
  }
`;
export const StyleErrorTypography = styled(Typography)`
  color: red;
  margin-top: 25px;
  margin-left: 7px;
  p {
    margin-left: 7px;
    margin-top: 25px;
  }
`;
export const StyledInvalidText = styled.div`
  h4 {
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 32.68px;
    text-align: center;
    margin-top: 9px;
  }
  p {
    //styleName: 16 REGULAR SANS;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    text-align: center;
    margin-top: -17px;
  }
  hr {
    margin-top: -19px;
    width: 718px;
    border-top: 0.5px solid red;
  }
`;
export const StyledRedModalButton = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin-top: 8px;
  margin-left: 672px;
  padding: 12px 0px 0px 0px;
  gap: 0px;
  border-radius: 50px;
  opacity: 0px;
  angle: -180 deg;
`;
export const StyledMainBox = styled(Box)`
  position: relative;
  top: 12%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 259px;
  background-color: white;
  box-shadow: 24;
  border-radius: 0px 0px 8px 8px;
  p: 4;
`;
export const StyledSubSuccessBox = styled(Box)`
  width: 469px;
  height: 179px;
  margin-left: 125px;
  border: 1px;
  margin-top: -14px;
  img {
    width: 80px;
    height: 80px;
    margin-left: 194px;
  }
  h2 {
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 32.68px;
    text-align: center;
  }
  p {
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    text-align: center;
  }
`;
// account otp
export const StyledAccountOtp = styled.div`
  width: 658px;
  height: 415px;
  border-radius: 8px;
  opacity: 0px;
  margin: auto;
  background: rgba(255, 255, 255, 1);
`;
export const StyledOtpText = styled.div`
  width: 307px;
  height: 33px;
  margin-top: 40px;
  margin-left: 175px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 24 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 32.68px;
    text-align: left;
  }
`;
export const StyledOtpText2 = styled.div`
  width: 367px;
  height: 14px;
  margin-top: 12px;
  margin-left: 145px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 10 REGULAR SANS;
    font-family: Open Sans;
    font-size: 10px;
    font-weight: 400;
    line-height: 13.62px;
    text-align: left;
  }
`;
export const StyledEmailCall = styled.div`
  display: flex;
  margin-top: 1px;
`;
export const StyledCall = styled.div`
  width: 161.67px;
  height: 22px;
  margin-left: 162px;
  display flex;
  
  p {
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 19.07px;
    text-align: left;
    img {
    width: 15.67px;
    height: 15px;

  }
    span {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 21.79px;
      text-align: left;
      color: rgba(151, 71, 255, 1);
    }
  }
`;
export const StyledEmail = styled.div`
  width: 170.33px;
  height: 22px;
  margin-left: 16px;
  p {
    //styleName: 14 MEDIUM SANS;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 19.07px;
    text-align: left;
    span {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 21.79px;
      text-align: left;
      color: rgba(151, 71, 255, 1);
    }
  }
`;
export const StyledOtpSubText = styled.div`
  width: 513px;
  height: 19px;
  margin-top: 18px;
  margin-left: 72px;
  p {
    //styleName: 14 MEDIUM SANS;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 19.07px;
    text-align: left;
  }
`;
export const StyledOtpInput = styled.div`
  width: 208px;
  height: 40px;
  margin-left: 225px;
  display: flex;
`;
