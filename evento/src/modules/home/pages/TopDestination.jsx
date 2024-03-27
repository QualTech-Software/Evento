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
              image="../../../public/assets/CardMumbai.png"
              buttonText="Mumbai"
            />
            <DestinationCard
              image="../../../public/assets/CardPune.png"
              buttonText="Pune"
            />
            <DestinationCard
              image="../../../public/assets/CardBangalore.png"
              buttonText="BANGALORE"
            />
            <DestinationCard
              image="../../../public/assets/CardDelhi.png"
              buttonText="Delhi"
            />
          </StyledCards>
        </StyledWrapper>
      </StyledDestination>
    </>
  );
};

export default TopDestination;
