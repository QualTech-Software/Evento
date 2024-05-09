import styled, { keyframes } from "styled-components";

export const StyledFunEvent = styled.div`
  width: 1440px;
  height: 358px;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 40px;
    height: 40px;
    margin-top: 24px;
    margin-left: 64px;
    padding: 10px 0px 0px 0px;
    gap: 0px;
    border-radius: 50px;
    opacity: 0px;
  }
`;
export const StyledFunEventMain = styled.div`
  margin: auto;
  width: 1440px;
  height: 458px;
`;
export const StyledEventText = styled.div`
  width: 263px;
  height: 65px;
  margin-top: 40px;
  margin-left: 64px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 48 BOLD SANS;
    font-family: Open Sans;
    font-size: 30px;
    font-weight: 700;
    line-height: 65.37px;
    text-align: left;
    color: rgba(255, 220, 49, 1);
  }
`;
export const StyledEventLocation = styled.div`
  width: 106px;
  height: 25px;
  margin-top: 16px;
  margin-left: 64px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 18 BOLD SANS;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.51px;
    text-align: left;
    color: white;
  }
`;
export const StyledEventSubText = styled.div`
  width: 495px;
  height: 27px;
  margin-top: 18px;
  margin-left: 64px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 20 MEDIUM SANS;
    font-family: Open Sans;
    font-size: 17px;
    font-weight: 500;
    line-height: 27.24px;
    text-align: left;
    color: white;
  }
`;
export const StyledExploreCategory = styled.div`
  width: 1160px;
  height: 268px;
  margin-left: 140px;
  position: relative;
`;
export const ExploreText = styled.div`
  width: 520px;
  height: 44px;
  margin-left: 320px;

  position: relative;
  p {
    //styleName: 32 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 26px;
    font-weight: 600;
    line-height: 43.58px;
    text-align: center;
  }
`;
export const StyledExploreCard = styled.div`
  width: 1160px;
  height: 200px;
  margin: 10px;
  opacity: 0px;
  display: ruby;

  margin-left: 23px;
`;

export const Explore = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  gap: 0px;
  opacity: 0px;
  margin-top: 34px;
  background-repeat: no-repeat;
  background-size: 168px 125px;
  background-position: 16px 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  p {
    //styleName: 20 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27.24px;
    text-align: center;
    color: rgba(255, 0, 0, 1);
    margin-top: 157px;
  }
`;
const rotateAnimation = keyframes`
  
  100% {
    transform: rotate(-4.36deg);
  }
`;

export const StyledHover = styled.div`
  &:hover::before {
    margin-top: 25px;
    margin-left: 10px;
    content: "";
    position: absolute;
    border-radius: 8px;
    width: 200px;
    height: 200px;
    background-color: red;
    opacity: 1;
    animation: ${rotateAnimation} 0.3s ease-in-out forwards;
  }
`;
export const StyledSharedMainContainer = styled.div`
  width: 616px;
  radius: 8px;
  margin: auto;

  .show {
    top: 50%;
    left: 50%;
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
    transition: top 0s 0s ease-in-out, opacity 0.2s 0s ease-in-out,
      transform 0.2s 0s ease-in-out;
    background-color: grey;
  }
`;
export const StyledPopupContainer = styled.div`
  background: rgb(255, 254, 254);
  padding: 25px;
  border-radius: 8px;
  top: 10%;
  width: 616px;
  height: 342px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%) scale(1.2);
  transition: top 0s 0.2s ease-in-out, opacity 0.2s 0s ease-in-out,
    transform 0.2s 0s ease-in-out;
`;
export const Styledheader = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #ebedf9;
  span {
    font-size: 21px;
    font-weight: 600;
  }
  .close {
    color: #878787;
    font-size: 17px;
    background: #f3f3f3;
    height: 33px;
    width: 33px;
    cursor: pointer;
  }
  .close:hover {
    background: #ebedf9;
  }
  display: flex;
  align-items: center;

  justify-content: center;
  transition: all 0.3s ease-in-out;
`;
export const StyledContent = styled.div`
  margin: 20px 0;
`;
export const StyledUnorderedList = styled.ul`
  margin: 15px 0 20px 0;
  a i {
    transition: transform 0.3s ease-in-out;
  }
  a:nth-child(1) {
    color: #1877f2;

    width: 30px;
    height: 30px;
  }

  a:nth-child(2) {
    color: #000;
  }

  a:nth-child(3) {
    color: #5fd568;
  }

  a:nth-child(4) {
    color: #25d366;
  }

  a {
    height: 50px;
    width: 50px;
    font-size: 20px;
    text-decoration: none;
    border: 1px solid transparent;
  }
`;
export const StyledTextContainer = styled.div`
  margin: 12px 0 -5px 0;
  /* //height: 45px; */
  border-radius: 4px;
  padding: 0 5px;
  border: 1px solid #757171;
  i {
    width: 50px;
    font-size: 18px;
    text-align: center;
  }
  .active i {
    color: #7d2ae8;
  }
  .active {
    border-color: #7d2ae8;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 15px;
  }
  button {
    color: #fff;
    padding: 5px 18px;
    background: #7d2ae8;
  }
  button:hover {
    background: #8d39fa;
  }
`;
