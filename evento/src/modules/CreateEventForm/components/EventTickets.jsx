import React, { useState } from "react";
import {
  StyledTicketContainer,
  StyledEventTicketContainer,
  StyledTicketHeading,
  StyledTickets,
  StyledTicketIcon,
  StyledTicketLabel,
  StyledGreenTick,
} from "../components/atoms";
import { TicketedEventIcon, FreeEventIcon } from "../../../assets";

const EventCard = ({ icon, label, type, selectedType, onClick }) => {
  const isSelected = type === selectedType;

  return (
    <StyledTicketContainer
      onClick={onClick}
      className={isSelected ? "selected" : ""}
    >
      <StyledTicketIcon src={icon} alt="Event Icon" />
      <StyledTicketLabel>{label}</StyledTicketLabel>
      {isSelected && <StyledGreenTick />}
    </StyledTicketContainer>
  );
};

const EventTickets = () => {
  const [selectedType, setSelectedType] = useState("free"); // Initialize to "free"

  const handleCardClick = (type) => {
    setSelectedType(type);
  };

  return (
    <StyledEventTicketContainer>
      <StyledTicketHeading>
        What type of event are you running?
      </StyledTicketHeading>
      <StyledTickets>
        <EventCard
          icon={FreeEventIcon}
          label="Free Event"
          type="free"
          selectedType={selectedType}
          onClick={() => handleCardClick("free")}
        />
        <EventCard
          icon={TicketedEventIcon}
          label="Ticketed Event"
          type="ticketed"
          selectedType={selectedType}
          onClick={() => handleCardClick("ticketed")}
        />
      </StyledTickets>
    </StyledEventTicketContainer>
  );
};

export default EventTickets;
