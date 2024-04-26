import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  StyledMainContainer,
  StyledSlickCarousel,
  StyledMainBlock,
  StyledIconButton,
  StyledFirstContainer,
  StyledHeading1,
  StyledHeading3,
  StyledParagraph,
  StyledFirstContainer1,
  StyledRedButton,
  StyledFollowButton,
  StyledParagraphTags,
  StyledAboutEvent,
  StyledIconButton1,
  StyledHeading,
  StyledFirstContainer2,
} from "../../events/components/atoms.js";
// import "../components/carousel.css";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import { Event, Event1, Event2 } from "../../../assets/index.js";
import EventInformation from "../../events/pages/EventInformation.jsx";
import { StyledNavbar } from "../components/atoms.js";
import { fetchEventsRequest } from "../redux/action/action.js";
import { imghost, vector, iconShare } from "../../../assets/index.js";
import { BiCalendar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoTicketSharp } from "react-icons/io5";

const EventCarousel = ({ events, loading, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const slickRef = useRef(null);

  useEffect(() => {
    if (events.length > 0) {
      $(slickRef.current).slick({
        infinite: true,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: true, // Adds the dots on the bottom
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3 seconds)
      });
      console.log("Events:", events);
    }
  }, [events]);

  console.log("Events:", events);
  if (loading || !events.length) {
    return <div>Loading...</div>; // Placeholder for when events are loading or not available
  }
  const event = events[0]; // Assuming you want to display the first event
  return (
    <>
      <StyledNavbar />
      <StyledMainContainer>
        <StyledSlickCarousel ref={slickRef} ratio={2}>
          {event?.files &&
            JSON.parse(event.files).map((file, index) => (
              <img key={index} src={file.path} alt={`Image ${file.path}`} />
            ))}
        </StyledSlickCarousel>
      </StyledMainContainer>
      <StyledMainBlock>
        <StyledFirstContainer style={{ marginBottom: 0 }}>
          <StyledHeading1>{event.title}</StyledHeading1>
          <StyledIconButton>
            <img src={vector} loading="lazy" alt="" />
          </StyledIconButton>
          <StyledIconButton1>
            <img src={iconShare} loading="lazy" alt="" />
          </StyledIconButton1>
        </StyledFirstContainer>
        <StyledFirstContainer>
          <StyledFirstContainer1>
            <StyledHeading3> Date and Time</StyledHeading3>
            <StyledParagraph>
              <BiCalendar />
              &nbsp; {event.date}
            </StyledParagraph>
            <StyledParagraph>
              <FiClock />
              &nbsp; {event.start_date_time} - {event.end_date_time}
            </StyledParagraph>
          </StyledFirstContainer1>
          <StyledFirstContainer2>
            <StyledHeading>Ticket Information</StyledHeading>
            <StyledHeading>
              <IoTicketSharp /> &nbsp; Standard Ticket: ₹ 200 each
            </StyledHeading>
            <StyledRedButton>
              <IoTicketSharp /> &nbsp;Buy Tickets
            </StyledRedButton>
          </StyledFirstContainer2>
        </StyledFirstContainer>
        <StyledHeading3>Location</StyledHeading3>
        <StyledParagraph>
          <SlLocationPin /> &nbsp; {event.location}
        </StyledParagraph>

        <StyledHeading3>Hosted by</StyledHeading3>
        <StyledFirstContainer>
          <img src={imghost} alt="" />
          <StyledFirstContainer1>
            <StyledParagraph>City Youth Movement</StyledParagraph>
            <StyledRedButton>Contact</StyledRedButton>
            <StyledFollowButton>Follow</StyledFollowButton>
          </StyledFirstContainer1>
        </StyledFirstContainer>
        <StyledHeading3>Event Description</StyledHeading3>
        <StyledParagraph>{event.Additional_information}</StyledParagraph>
        <StyledHeading3>3 Reasons to attend the event:</StyledHeading3>
        <StyledParagraph>
          1. The FIRST Christmas concert of Mumbai! <br />
          2. A special Christmas Choir!
          <br /> 3. Special Dance performances and many more surprises!
        </StyledParagraph>
        <StyledHeading3>About this event</StyledHeading3>
        <StyledFirstContainer>
          <StyledAboutEvent>
            <img src="../../../assets/Timericon.png" />
            <StyledParagraph>4 hours 30 minutes</StyledParagraph>
            <img src="../../../assets/Ageicon.png" style={{ marginLeft: 24 }} />
            <StyledParagraph>Ages 21+</StyledParagraph>
            <img
              src="../../../assets/Mobileicon.png"
              style={{ marginLeft: 24 }}
            />
            <StyledParagraph>Mobile Ticket</StyledParagraph>
          </StyledAboutEvent>
        </StyledFirstContainer>
        <StyledHeading3>Refund Policy</StyledHeading3>
        <StyledParagraph>No refunds</StyledParagraph>
        <StyledHeading3>Tags</StyledHeading3>
        <StyledFirstContainer>
          <StyledParagraphTags>Holiday Concert</StyledParagraphTags>
          <StyledParagraphTags>Live Performance</StyledParagraphTags>
          <StyledParagraphTags>Seasonal Event</StyledParagraphTags>
          <StyledParagraphTags>Family-Friendly</StyledParagraphTags>

          <StyledParagraphTags>#Christmas_Carols</StyledParagraphTags>
          <StyledParagraphTags>#Christmas_Spirit</StyledParagraphTags>
        </StyledFirstContainer>
        {/* <Onlineevents /> */}
      </StyledMainBlock>
    </>
  );
};

const mapStateToProps = (state) => ({
  events: state.event.events,
  loading: state.event.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEventsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCarousel);
