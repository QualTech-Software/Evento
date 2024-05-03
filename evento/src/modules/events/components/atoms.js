import styled from "@emotion/styled";
import { keyframes } from "styled-components";
import { Button, IconButton } from "@mui/material";

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
  .slick-next {
    margin-right: 35px;
  }
  .slick-prev {
    margin-left: 48px;
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
    background-image: url("../../../assets/iconVector.png") !important;
  }
`;
export const StyledMainBlock = styled.div`
  width: 1312px;
  margin: auto;
  display: flex;
  // margin-top: 16px;
  // margin-left: 64px;
`;

export const StyledFirstContainer = styled.div`
  //display: flex;
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
export const StyledRedButton = styled(Button)`
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
export const StyledFollowButton = styled(Button)`
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
  color: #1e0a3c;
`;
export const StyledFirstContainer2 = styled.div`
  //margin-left: 761px;
`;

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
export const StyledLeftContainer = styled.div`
  width: 730px;
`;
export const StyledRightContainer = styled.div``;
