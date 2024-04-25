import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";

export const StyledMainContainer = styled.div`
  width: 1312px;
  margin: auto;
  margin-top: 100px;
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
    background-image: url("../../../assets/iconVector.png") !important;
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
  margin-left: 761px;
`;
