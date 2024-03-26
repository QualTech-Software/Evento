import React from "react";
import { StyledEventButton, StyledEventButtonP } from "../components/atoms.js";
import { useNavigate } from "react-router-dom";

export default function Ticketing({ setCurrentStep }) {
  const navigate = useNavigate();
  const handleSave = () => {
    setCurrentStep(3);
    navigate("/createeventform/review");
  };
  return (
    <>
      Ticketing
      <StyledEventButton onClick={handleSave}>
        <StyledEventButtonP>Save & Continue</StyledEventButtonP>
      </StyledEventButton>
    </>
  );
}
