import styled from "styled-components";
import { TextField, Button } from "@mui/material";

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
