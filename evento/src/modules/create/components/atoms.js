import styled from "styled-components";

export const Signin = styled.div`
  p {
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin-left: -6px;

    &:hover {
      color: red;
      cursor: default;
    }
  }
`;
export const LabelInput = styled.label`
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  font-weight: 400;
  font-family: "Open Sans";
  margin-left: 25px;
`;
export const ContPara = styled.p`
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: capitalize;
  color: white;
`;
export const OrPara = styled.p`
  top: -2px;
  position: relative;
  left: 220px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
`;
export const CreateAcc = styled.div`
  display: block;
  width: 551px;
  margin-left: 100px;
`;
export const AccLogo = styled.div`
  width: 147px;
  height: 75px;
  margin-top: 35px;
  /* left: 889px; */
  position: relative;
  background-image: url("../../assets/LOGO.png");
  background-size: cover;
`;
export const Ptag = styled.div`
  width: 303px;
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
  p span:hover {
    cursor: pointer;
  }
`;
export const AccHead = styled.div`
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
  }
`;
export const MainCont = styled.div`
  height: 720px;
  width: 1440px;
  background-color: red;
  position: relative;
  margin: auto;
  display: flex;
  background-image: url(src/assets/group1.png);
  background-size: 787px;
  background-repeat: no-repeat;
`;
