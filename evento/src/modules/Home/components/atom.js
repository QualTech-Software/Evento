import styled from "@emotion/styled";
import AspectRatio from "@mui/joy/AspectRatio";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import { CardContent, IconButton, Typography } from "@mui/material";

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
  margin-left: 64px;
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
