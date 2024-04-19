import styled from "@emotion/styled";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

export const StyledMain = styled.div`
  background-color: #000;
  width: 1440px;
  display: block;
`;
export const StyledFooter = styled.div`
  color: white;
  display: flex;
  margin-bottom: 96px;
`;

const SharedStyle = styled.div`
  margin-top: 64px;
  h3 {
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 600;
    line-height: 24.51px;
    text-align: left;
    margin-bottom: 24px;
  }
`;

export const StyledLinkEvento = styled(SharedStyle)`
  width: 108px;
  height: 203px;
  margin-left: 64px;
`;
export const StyledLinkHelp = styled(SharedStyle)`
  width: 160px;
  height: 176px;
  margin-right: 164px;
`;
export const StyledLinkFollow = styled(SharedStyle)`
  width: 84px;
  height: 149px;
  margin-right: 164px;
`;
export const StyledLinkApp = styled(SharedStyle)`
  width: 243px;
  height: 225px;
  margin-right: 63px;
`;
export const StyledLinkCategories = styled(SharedStyle)`
  width: 93px;
  height: 203px;
  margin-left: 133px;
  margin-right: 164px;
`;
export const StyledButton = styled(Button)`
  width: 243px;
  height: 78px;
  padding: 12px 12px 12px 14px;
  border-radius: 6px;
  border: 1px solid #fff;
  &.googleplay {
    margin-bottom: 20px !important;
  }
  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  p {
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
    color: #fff;
  }
  span {
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 27.24px;
    text-align: left;
    color: #fff;
  }
`;
export const StyledBottom = styled.div`
  text-align: center;
  // margin: 0px 0px 23px 0px;
  color: #fff;
  padding: 23px 0px 23px 0px;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 24.51px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  margin: 0px 0px 8px 0px;
  color: #fff;
  text-decoration: none;
  font-family: Open Sans;
  font-size: 14px;
`;
