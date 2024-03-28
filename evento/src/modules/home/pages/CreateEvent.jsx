import React from "react";
import {
  StyledCreateEvent,
  StyledCreateText,
  StyledSubtext,
} from "../components/atoms";

const CreateEvent = () => (
  <>
    <StyledCreateEvent className="qt-create-event-main">
      <StyledCreateText className="qt-create-text">
        <p>Create an event with Evento</p>
      </StyledCreateText>
      <StyledSubtext className="qt-create-subtext">
        <p>
          Got a show, event, activity or a great experience? Partner with us &
          get listed on Evento
        </p>
        <button>
          <p>Create Event</p>
        </button>
      </StyledSubtext>
    </StyledCreateEvent>
  </>
);

export default CreateEvent;
