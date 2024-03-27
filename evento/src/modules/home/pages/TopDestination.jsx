import React from "react";
import {
  StyledDestination,
  StyledDestText,
  StyledWrapper,
  StyledCards,
} from "../components/atoms";
import DestinationCard from "./DestinationCard";

const TopDestination = () => {
  return (
    <>
      <StyledDestination className="qt-destination-main">
        <StyledDestText>
          <p>Top destinations in India</p>
        </StyledDestText>

        <StyledWrapper>
          <StyledCards>
            <DestinationCard
              image="../../../public/assets/RecMumbai.png"
              buttonText="Mumbai"
            />
            <DestinationCard
              image="../../../public/assets/RecPune.png"
              buttonText="Pune"
            />
            <DestinationCard
              image="../../../public/assets/RecBangalore.png"
              buttonText="BANGALORE"
            />
            <DestinationCard
              image="../../../public/assets/recDelhi.png"
              buttonText="Delhi"
            />
          </StyledCards>
        </StyledWrapper>
      </StyledDestination>
    </>
  );
};

export default TopDestination;
