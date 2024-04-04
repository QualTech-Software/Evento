import React from "react";
import {
  StyledCreateEvent,
  StyledCreateText,
  StyledSubtext,StyledLink
} from "../components/atoms";
const CreateEvent = () => {
  return (
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
};

const CreateEvent = () => (
  <StyledCreateEvent className="qt-create-event-main">
    <StyledCreateText className="qt-create-text">
      <p>Create an event with Evento</p>
    </StyledCreateText>
    <StyledSubtext className="qt-create-subtext">
      <p>
        Got a show, event, activity or a great experience? Partner with us & get
        listed on Evento
      </p>
      <button>
        <StyledLink to="/createeventform" className="home-createevent">
          <p>Create Event</p>
        </StyledLink>
      </button>
    </StyledSubtext>
  </StyledCreateEvent>
);

export default CreateEvent;
