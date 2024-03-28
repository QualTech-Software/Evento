import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledQtCardsContainer = styled.div`
  background-size: contain;
  width: 1440px;
  height: 720px;
  margin: auto;
  display: flex;
`;
export const StyledQtWelcome = styled.div`
  width: 550px;
  height: 114px;
  position: relative;
  margin-top: 64px;
  left: 445px;
  h1 {
    width: 486px;
    height: 65px;
    font-family: "Inter", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    position: relative;
    left: -2px;
  }
  p {
    width: 490px;
    height: 25px;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    position: relative;
    //margin-top: 24px;
    left: 30px;
  }
`;
export const StyledQtWrapper = styled.div`
  width: 1440px;
  margin-left: -549px;
  display: flex;
  //   margin-right: 57px;
  margin-top: 32px;
`;
export const StyledQtCard = styled.div`
  width: 399px;
  height: 400px;
  position: relative;
  left: 45px;
  border-radius: 8px;
  background-color: white;
  margin: 210px 57px 10px 10px;
  h3 {
    //width: 209px;
    height: 44px;
    position: relative;
    margin-top: 24px;
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: center;
  }
  img {
    width: 180px;
    height: 180px;
    position: relative;
    margin-top: 40px;
    left: 109.5px;
  }
`;
export const StyledQtButton = styled.div`
  width: 243px;
  height: 48px;
  position: relative;
  margin-top: 24px;
  margin-left: 78px;
  border-radius: 8px;
  border: 1px solid rgba(172, 172, 172, 1);
  p {
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 21.79px;
  }
  &:hover {
    cursor: pointer;
    color: white;
    background-color: red;
  }
`;
export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;
