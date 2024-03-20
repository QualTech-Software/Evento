import React, { useState } from "react";
import { arrow, editfilled, bannerfilled } from "../icons";
// import "../Styles/CreateEventForm.css";
import {
  NewEvent,
  EventEdit,
  Styledeventedit,
  Styledeventbanner,
  Styledeventticketing,
  Styledeventreview,
  StyledNewEventh1,
  StyledEditp,
  Styledbannerp,
  StyledTicketp,
  StyledReviewp,
  StyledArrow,
} from "../modules/CreateEventForm/components/atoms.js";

const CreactEventBanner = ({ step = 1 }) => (
  <EventEdit className="qt-event-edit">
    <Styledeventedit className="qt-edit">
      <img
        src={step >= 1 ? editfilled : bannerfilled}
        className="qt-event-editfilled"
      />

      <StyledEditp>Edit</StyledEditp>
    </Styledeventedit>
    <Styledeventbanner className="qt-banner">
      <img
        src={step >= 2 ? editfilled : bannerfilled}
        className="qt-event-bannerfilled"
      />
      <Styledbannerp>Banner</Styledbannerp>
    </Styledeventbanner>
    <Styledeventticketing className="qt-ticketing">
      <img
        src={step >= 3 ? editfilled : bannerfilled}
        className="qt-event-ticketing"
      />
      <StyledTicketp>Ticketing</StyledTicketp>
    </Styledeventticketing>
    <Styledeventreview className="qt-review">
      <img
        src={step >= 4 ? editfilled : bannerfilled}
        className="qt-event-review"
      />
      <StyledReviewp>Review</StyledReviewp>
    </Styledeventreview>
  </EventEdit>
);

export default function CreateEventForm() {
  const [step, setStep] = useState(1);
  return (
    <NewEvent className="qt-newevent">
      <StyledArrow src={arrow} className="qt-event-arrow" />
      <StyledNewEventh1>Create a New Event</StyledNewEventh1>
      <CreactEventBanner step={step} />
    </NewEvent>
  );
}
