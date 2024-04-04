import React from "react";
import {
  StyledDestination,
  StyledDestText,
  StyledWrapper,
  StyledCards,
} from "../components/atoms";
import DestinationCard from "./DestinationCard";
import DestinationData from "../components/DestinationData.json";
const TopDestination = () => (
  <StyledDestination className="qt-destination-main">
    <StyledDestText>
      <p>Top destinations in India</p>
    </StyledDestText>

    <StyledWrapper>
      <StyledCards>
        {DestinationData.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            buttonText={destination.buttonText}
          />
        ))}
      </StyledCards>
    </StyledWrapper>
  </StyledDestination>
);

export default TopDestination;