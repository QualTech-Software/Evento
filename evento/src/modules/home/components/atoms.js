import styled from "@emotion/styled";

import { InputLabel, MenuItem } from "@mui/material";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import { CardContent } from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
// import IconButton from "@mui/material/IconButton";

// export const MenuItem = styled.menuitem`
//   background-color: "red";

// import { CardContent, IconButton } from "@mui/material";
// export const MenuItem = styled.menuitem`;
//   background-color: "red";
// `;
export const MenuItemStyle = styled(MenuItem)`
  &.location {
    background-image: url("../../public/assets/Location2.png");
    background-repeat: no-repeat;
    background-size: 25px 25px;
    // margin-top: 25px;
    top: 20px;
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
    margin-top: -4px;
    color: gray;
    font-size: 17px;
  }
`;
export const StyledFirstInput = styled.div`
  position: relative;
  width: 820px;
`;
export const TrendingSearch = styled.div`
  background-color: white;
  width: 814px;
  height: 188px;

  position: relative;

  border-radius: 0px 0px 10px 10px;
  p {
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 600;
    line-height: 27.24px;
    text-align: left;
    margin-left: 22px;
  }
`;
export const StyledDropDownTrending = styled.div`
  position: absolute;
  top: 65px;
`;
export const DropdownIconWrapper = styled.div``;
export const EventGroup = styled.div`
  position: relative;
  width: 738px;
  height: 104px;
  margin-top: 25px;
  button {
    width: Hug (137px) px;
    margin: 10px;
    height: Hug (45px) px;
    padding: 10px 20px 10px 20px;
    border-radius: 50px;
    border: 1px solid black;
    opacity: 0px;
    background: rgba(218, 217, 226, 1);
  }
  button:hover {
    background-color: rgba(170, 166, 207, 1);
    border: none;
  }
`;

export const StyledSecondInput = styled.div`
  margin-left: 816px;
  margin-top: -85px;
`;
export const MenuItemStyle1 = styled(MenuItem)`
  height: 300px;
  width: 800px;
  margin-right: 20px;
`;
export const MenuItemStyleOl = styled(MenuItem)`
  &.world {
    background-image: url("../../public/assets/world.png");
    background-repeat: no-repeat;
    background-size: 25px 25px;
    margin-top: 35px;
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
    margin-top: -5px;
    color: gray;
    font-size: 17px;
  }
`;
export const IconButtonStyle = styled.div`
  margin-left: 300px;
  margin-top: -48px;
`;
export const StyledQtHome = styled.div`
  width: 1440px;
  height: 730px;
  margin: auto;
`;
export const StyledNavbar = styled.div`
  width: 1440px;
  height: 100px;
  position: relative;
  img {
    width: 191px;
    height: 98px;
    top: 1px;
    margin-left: 64px;
  }
`;
export const StyledSidebar = styled.div`
  width: 821px;
  height: 64px;
  margin-top: -76px;
  left: 549px;
  display: flex;
  position: relative;
`;
export const StyledCategory = styled.div`
  width: 157px;
  height: 64px;
  display: flex;
  position: relative;
  p {
    width: 93px;
    height: 25px;
    left: 8px;
    position: relative;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
  }
  img {
    width: 24px;
    height: 24px;
    top: 20px;
    margin-left: 16px;
    position: relative;
  }
`;
export const StyledEvent = styled.div`
  width: 169px;
  height: 64px;
  display: flex;
  border-radius: 8px;
  position: relative;
  p {
    width: 111px;
    height: 25px;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    // margin-left: 8px;
  }
  img {
    width: 18px;
    height: 18px;
    top: 20px;
    margin-left: 16px;
    position: relative;
  }
`;
export const StyledInterest = styled.div`
  width: 155px;
  height: 64px;
  border-radius: 8px;
  display: flex;
  p {
    width: 91px;
    height: 25px;
    top: 21px;
    left: 48px;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    margin-left: 8px;
    letter-spacing: 0em;
    text-align: left;
  }
  img {
    width: 24px;
    height: 24px;
    top: 21px;
    margin-left: 16px;
    position: relative;
  }
`;
// export const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
export const StyledQtLogin = styled.div`
  width: 116px;
  height: 64px;
  display: flex;
  cursor: pointer;
  background-image: url("../../../assets/login.png");
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: 60px center;

  p {
    width: 54px;
    height: 25px;
    margin-left: 6px;
    position: relative;
    color: #000;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const StyledSignup = styled.div`
  width: 128px;
  height: 64px;
  display: flex;
  button {
    background-color: red;
    cursor: pointer;
    border: none;
    width: 128px;
    height: 64px;
    border-radius: 8px;
    background-image: url("../../../public/assets/signup.png");
    background-repeat: no-repeat;
    background-size: 24px 20px;
    background-position: 96px center;
  }
  p {
    width: 64px;
    height: 25px;
    margin-left: 16px;
    position: relative;
    color: rgba(255, 255, 255, 1);
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
  img {
    width: 24px;
    height: 20px;

    position: relative;
  }
`;
export const StyledHomebar = styled.div`
  background-position: center;
  height: 630px;
  object-fit: cover;
  background-image: url("../../../public/assets/Home2.png");
  margin-top: -48px;
  background-repeat: no-repeat;
  h3 {
    width: 1005px;
    height: 130px;
    top: 140px;
    left: 217px;
    position: relative;
    font-family: "Open Sans";
    color: rgba(255, 255, 255, 1);
    font-size: 48px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: center;
  }
  h3 span {
    color: rgba(255, 212, 0, 1);
  }
`;
export const SearchBar = styled.div`
  margin-top: 188px;
  position: relative;
  margin-left: 152px;
  display: flex;
  // width: 1136px;
  .search-input {
    width: 834px;
    height: 80px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 10px 0px 0px 10px;
    background-image: url("../../../public/assets/search.png");
    background-repeat: no-repeat;
    background-position: 25px;
    background-size: 22px 30px;
    padding-left: 79px;
  }
  .extra-input {
    width: 302px;
    height: 80px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 10px 0px 0px 10px;
    background-image: url("../../../public/assets/location.png");
    background-repeat: no-repeat;
    background-position: 25px;
    background-size: 22px 30px;
    padding-left: 79px;
  }
`;
export const StyledInputCont = styled.div`
  margin-top: 190px;
  margin-left: 152px;
  display: block;
  .search-input {
    width: 733px;
    height: 80px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 10px 0px 0px 10px;
    background-image: url("../../../public/assets/search.png");
    background-repeat: no-repeat;
    background-position: 25px;
    background-size: 29.84px 30px;
    padding-left: 79px;
  }
  .extra-input {
    width: 302px;
    height: 80px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 0px 10px 0px 0px;
    background-image: url("../../../public/assets/location.png");
    background-repeat: no-repeat;
    background-position: 25px;
    background-size: 29.84px 30px;
    padding-left: 79px;
  }
`;
export const ExtraHome = styled.div`
  background-color: white;
  border-radius: 0px 10px 10px 0px;
  height: 80px;
`;
export const Arrow = styled.div`
  img {
    margin-left: 208px;
    width: 30px;
    height: 30px;
  }
`;
export const DropDown = styled.div`
  background-color: white;
  width: 383px;
  height: 160px;
  border-radius: 0px 0px 10px 10px;
  margin-top: 23px;

  height: 160px;
  border-radius: 0px 0px 10px 10px;
`;
//Css Of my home
export const Head = styled.div`
  width: 485px;
  height: 44px;
  margin: 40px 0px 16px 64px;

  font-family: Open Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  text-align: left;
`;
export const Eventname = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 27.24px;
  text-align: left;
  color: #1e0a3c;
  height: 27px;
`;
export const Eventadd = styled.div`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.79px;
  text-align: left;
  height: 27px;
  color: #000000;
  margin-top: 10px;
`;
export const Eventtime = styled.div`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: left;
  color: #000000;
  height: 27px;
`;
export const Tickets = styled.div`
  height: 25px;
  display: inline-flex;
  .price {
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 600;
    line-height: 24.51px;
    text-align: left;
  }
  img {
    width: 22px;
    height: 22px;
    margin-right: 7px;
  }
  .ellipse img {
    width: 5px;
    height: 5px;
    margin: 5px 16px 0px 16px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24.51px;
  text-align: left;
  margin-top: -35px;
  position: relative;
  color: #fff;
  background-color: #ff0000;
  width: fit-content;
  height: 35px;
  padding: 5px 10px 5px 10px;
  border-radius: 0px 6px 0px 0px;
  margin-left: -16px;
  z-index: 1;
`;
export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1638px;
  margin-bottom: 40px;
`;
export const StyledCard = styled(Card)`
  width: 410px;
  height: auto;
  margin-top: 20px;
  margin-right: 40px;
  background-color: transparent;
  border: 0;
  &:hover {
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.2) !important;
  }
`;
export const StyledCardOverflow = styled(CardOverflow)`
  width: 410px;
  height: 205px;
  borderradius: 8px;
`;
export const StyledAspectRatio = styled(AspectRatio)`
  img {
    position: "absolute";
    left: 0;
    z-index: 1;
  }
`;
export const StyledIconButton = styled(IconButton)`
  position: absolute !important;
  border-radius: 50%;
  margin: 16px 0px 0px 344px;
  z-index: 1;
  background-color: #fff;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #9747ff;
  }
`;
export const StyledCardContent = styled(CardContent)`
  width: 365px;
  height: 126px;
  margin-top: 15px;
  padding: 16px 0px;
`;
export const StyledCardTypography = styled(Typography)`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 27.24px;
  color: #ff0000;
  gap: 8px;
  height: 27px;
  img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;
export const CardOutline = styled.div`
  // margin-left: 64px;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  height: 37px;
  padding: 5px 16px 5px 0px;
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 64px;
  margin-top: 16px;
  border-radius: 8;

  .btn-default {
    width: 133px;
    color: #fff;
    background: #ff0000;
    text-align: center;
    border: 1px solid #ababab !important;
    margin-right: 20px;
    border-radius: 50px !important;
  }
  .btn-tom {
    width: 133px;
    margin-right: 20px;
    border: 1px solid #ababab !important;
    background: #ffffff;
    border-radius: 50px !important;
    color: #ababab;
  }
  .btn-free {
    width: 75px;
    border: 1px solid #ababab !important;
    background: #ffffff;
    border-radius: 50px !important;
    color: #ababab;
  }
  .btn-week {
    width: 167px;
    border: 1px solid #ababab !important;
    margin-right: 20px;
    background: #ffffff;
    border-radius: 50px !important;
    color: #ababab;
  }
  .btn-default:hover,
  .btn-week:hover,
  .btn-free:hover,
  .btn-tom:hover {
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.25) !important;
    background-color: transparent !important;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
//create event
export const StyledCreateEvent = styled.div`
  width: 1440px;
  height: 315px;
  background-image: url("../../../public/assets/CreateEvent2.png");
  background-repeat: no-repeat;
  background-position: relative;
  background-size: 1440px 315px;
`;
export const StyledCreateText = styled.div`
  width: 491px;
  height: 49px;
  top: 62px;
  margin-left: 475px;
  position: relative;
  p {
    font-family: "Open Sans";
    font-size: 36px;
    font-weight: 600;
    line-height: 49.03px;
    text-align: left;
    color: rgba(255, 224, 71, 1);
  }
`;
export const StyledSubtext = styled.div`
  width: 833px;
  height: 27px;
  top: 60px;
  left: 304px;
  position: relative;
  p {
    //styleName: 20 MEDIUM SANS;
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 500;
    line-height: 27.24px;
    text-align: left;
    color: rgba(255, 224, 71, 1);
  }
  button {
    width: 169px;
    height: 64px;
    position: relative;
    top: 20px;
    margin-left: 336px;
    padding: 16px 0px 0px 0px;
    position: relative;
    border-radius: 8px;
    opacity: 0px;
    background: rgba(255, 212, 0, 1);
    background-image: url("../../../public/assets/CreateEvent.png");
    background-repeat: no-repeat;
    background-position: 23px;
    background-size: 18px 18px;
    p {
      //styleName: 18 SEMIBOLD SANS;
      font-family: Open Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 24.51px;
      text-align: center;
      color: black;
      margin-top: 3px;
      margin-left: 33px;
    }
    p:hover {
      color: red;
    }
  }
`;
//top destination
export const StyledDestination = styled.div`
  width: 1440px;
  height: 600px;
`;
export const StyledDestText = styled.div`
  width: 381px;
  height: 44px;
  margin-top: 40px;
  margin-left: 64px;
  p {
    //styleName: 32 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 43.58px;
    text-align: left;
  }
`;
export const StyledWrapper = styled.div`
  width: 1312px;
  height: 447px;
  margin-top: 20px;
  margin-left: 33px;
`;
export const StyledCards = styled.div`
  display: flex;
`;
export const StyledDest = styled.div`
  width: 292px;
  margin: 20px;
  height: 447px;
  background-image: url("../../../public/assets/CardMumbai.png");
  background-repeat: no-repeat;
  position: relative;
  background-size: 292px 447px;
  border-radius: 8px;
  p {
    color: rgba(30, 10, 60, 1);
    width: 135px;
    height: 41px;
    margin-top: 20px;
    margin-left: 59px;
    text-transform: uppercase;
    text-decoration: underline;
    //styleName: 32 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 43.58px;
    text-align: left;
  }
  button {
    width: 120px;
    height: 40px;
    margin-top: 300px;
    margin-left: 58px;
    background: rgba(255, 0, 0, 1);
    background-image: url("../../../public/assets/Arrow1.png");
    background-repeat: no-repeat;
    position: relative;
    background-size: 16px 16px;
    background-position: 76px;
    border-radius: 20px;
    p {
      width: 58px;
      height: 22px;
      margin-top: 6px;
      margin-left: 10px;
      gap: 0px;
      opacity: 0px;
      //styleName: 16 MEDIUM SANS;
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 21.79px;
      text-align: left;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      text-transform: capitalize;
    }
  }
`;
