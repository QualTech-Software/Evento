import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledCreateEvent,
  StyledCreateText,
  StyledSubtext,
} from "../../Home/components/atoms";

const CreateEvent = ({ token }) => {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    if (!token) {
      alert("Please log in to create an event.");
    } else {
      navigate("/createeventform");
    }
  };

  return (
    <StyledCreateEvent className="qt-create-event-main">
      <StyledCreateText className="qt-create-text">
        <p>Create an event with Evento</p>
      </StyledCreateText>
      <StyledSubtext className="qt-create-subtext">
        <p>
          Got a show, event, activity, or a great experience? Partner with us & get
          listed on Evento
        </p>
        <button onClick={handleCreateEventClick}>
          <p>Create Event</p>
        </button>
      </StyledSubtext>
    </StyledCreateEvent>
  );
};

const mapStateToProps = (state) => ({
  token: state.token || localStorage.getItem("token"),
});

export default connect(mapStateToProps)(CreateEvent);
