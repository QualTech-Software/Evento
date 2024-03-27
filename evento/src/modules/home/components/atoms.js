import styled from "@emotion/styled";
import { InputLabel, MenuItem } from "@mui/material";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import { CardContent, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

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
    margin-top: 15px;
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
    margin-top: -5px;
    color: gray;
    font-size: 17px;
  }
`;
export const TrendingSearch = styled.div`
  background-color: white;
  width: 817px;
  height: 271px;
  margin-top: -187px;
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
    border: 1px 0px 0px 0px;
    opacity: 0px;
    background: rgba(218, 217, 226, 1);
  }
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
    margin-top: 15px;
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
    margin-top: -5px;
    color: gray;
    font-size: 17px;
  }
`;
export const QtHome = styled.div`
  width: 1440px;
  height: 730px;
  margin: auto;
`;
export const Navbar = styled.div`
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
export const Sidebar = styled.div`
  width: 821px;
  height: 64px;
  margin-top: -76px;
  left: 549px;
  display: flex;
  position: relative;
`;
export const Category = styled.div`
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
export const Event = styled.div`
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
export const Interest = styled.div`
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

export const QtLogin = styled.div`
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
export const Signup = styled.div`
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
export const Homebar = styled.div`
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
    background-size: 29.84px 30px;
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
    background-size: 29.84px 30px;
    padding-left: 79px;
  }
`;
export const InputCont = styled.div`
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
  margin-top: -7px;
  margin-left: 820px;
  top: 392;
  width: 377px;
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
`;
