import styled from "styled-components";

import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

export const Createp = styled.p`
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  left: 151px;
  margin-top: 15px;
  color: rgba(255, 255, 255, 1);
`;
export const NameError = styled.p`
  color: red;
  font-size: 10px;
`;

export const StyledTextField = styled(TextField)`
  &.textfieldlname.error input {
    color: red !important;

    font-size: 10px;
  }
  fieldset {
    border-color: transparent;
  }

  &:hover fieldset {
    border-color: transparent !important;
  }
`;
export const StyledTextFieldPass = styled(StyledTextField)`
  &.textfield.error input {
    color: red !important;
    font-size: 10px;
  }
`;
export const StyledTextFieldCpass = styled(StyledTextField)`
  input {
    padding-left: 51px;
  }
  &.textfieldphone.error input {
    color: red !important;
    font-size: 10px;
  }
`;

export const StyledTextFieldPhone = styled(StyledTextField)`
  &.textfield.error input {
    color: red !important;
    font-size: 10px;
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
export const CheckboxStyle = styled(Checkbox)`
  input {
    color: white;
    width: 24px;
    height: 24px;
    border: 1px solid white;
    margin-left: 20px;
  }
  svg {
    color: white;
    margin-top: -15px;
  }
`;
export const QtAcc = styled.div`
  height: 775px;
  width: 1440px;
  background-color: red;
  position: relative;
  margin: auto;
  display: flex;
  background-image: url(src/assets/group1.png);
  background-size: auto 787px;
  background-repeat: no-repeat;
`;
export const QtRight = styled.div`
  display: block;
  width: 551px;
  margin-left: 100px;
`;
export const QtLogo = styled.div`
  width: 147px;
  height: 75px;
  top: 35px;
  /* left: 889px; */
  position: relative;
  background-image: url("../../assets/LOGO.png");
  background-size: cover;
`;
export const QtPara = styled.div`
  width: 303px;
  top: 90px;
  position: relative;
  p {
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }
  p span {
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
  }
`;
export const QtHead = styled.div`
  width: 437px;
  height: 65px;
  position: relative;
  top: 55px;
  p {
    font-family: "Open Sans";
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const FormCont = styled.div`
  margin-top: 90px;
`;
export const CustInputB = styled.div`
  margin: 21px;
  label {
    position: relative;
    top: -27px;
    left: -20px;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    color: rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
  }
`;
export const CustInputC = styled.div`
  margin-top: 43px;
  label {
    position: relative;
    top: -6px;
    left: 2px;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    color: rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
  }
`;
export const CustInputD = styled.div`
  margin-top: 16px;
  label {
    position: relative;
    top: -6px;
    left: 2px;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    color: rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
  }
`;
export const CustInputE = styled.div`
  margin-top: 16px;
  label {
    position: relative;
    top: -6px;
    left: 2px;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    color: rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
  }
`;
export const QtAccept = styled.div`
  width: 424px;
  height: 32px;
  input {
    width: 24px;
    height: 24px;
    margin-top: 13px;
    background-color: red;
  }
  p {
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 15px;
    margin-left: -8px;
  }
  p span {
    color: rgba(0, 0, 0, 1);
  }
`;
export const CreateAccBtn = styled.div`
  button {
    width: 405px;
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
