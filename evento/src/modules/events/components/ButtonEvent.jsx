import React from "react";
import Button from "@mui/joy/Button";
import { StyledButtonGroup } from "../../Home/components/atoms";

const ButtonEvent = ({ handleTodayClick, handleTomorrowClick }) => (
  <StyledButtonGroup
    sx={{
      borderRadius: 8,
    }}
  >
    <Button className="btn-default" onClick={handleTodayClick}>
      Today
    </Button>
    <Button className="btn-tom" onClick={handleTomorrowClick}>
      Tomorrow
    </Button>
    <Button className="btn-week">This Weekend</Button>
    <Button className="btn-free">Free</Button>
  </StyledButtonGroup>
);

export default ButtonEvent;
