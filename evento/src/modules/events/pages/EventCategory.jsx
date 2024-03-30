import React from "react";
import BackBtn from "../../../../public/assets/Backbtn.png";
import Navbar from "./Navbar"; // Import the Navbar component
import {
  StyledFunEvent,
  FunEventMain,
  StyledEventText,
  StyledEventLocation,
  StyledEventSubText,
} from "../components/atoms";
import eventData from "../components/Event.json"; // Import the JSON data
import { useParams } from "react-router-dom"; // Import useParams hook

const EventCategory = () => {
  // Extract the id parameter from the URL
  const { id } = useParams();

  // Convert id to number (URL parameters are always strings)
  const eventId = parseInt(id);

  // Check if the event exists in the eventData JSON
  if (!eventData[eventId]) {
    return <div>Event not found</div>;
  }

  // Extracting data based on the received ID
  const { text, location, subtext, backgroundImage } = eventData[eventId];

  return (
    <FunEventMain className="fun-event-main">
      <Navbar />
      <StyledFunEvent style={{ backgroundImage: `url(${backgroundImage})` }}>
        <img src={BackBtn} />
        <StyledEventText>
          <p>{text}</p>
        </StyledEventText>
        <StyledEventLocation>
          <p>{location}</p>
        </StyledEventLocation>
        <StyledEventSubText>
          <p>{subtext}</p>
        </StyledEventSubText>
      </StyledFunEvent>
    </FunEventMain>
  );
};

export default EventCategory;
