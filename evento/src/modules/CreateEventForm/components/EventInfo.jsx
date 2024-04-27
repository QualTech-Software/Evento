import React from "react";
import {
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
} from "../components/atoms.js";
// import "../components/carousel.css";
import { imghost } from "../../../assets/index.js";
import { BiCalendar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoTicketSharp } from "react-icons/io5";
import Onlineevents from "../../Home/pages/Events.jsx";

const EventInfo = () => {
  return (
    <>
      <StyledMainBlock>
        <StyledFirstContainer style={{ marginBottom: 0 }}>
          <StyledHeading1>Sound Of Christmas 2023</StyledHeading1>
          <StyledFirstContainer2>
            <StyledHeading>Ticket Information</StyledHeading>
            <StyledHeading>
              <IoTicketSharp /> &nbsp; Standard Ticket: ₹ 200 each
            </StyledHeading>
            {/* <StyledRedButton>
              <IoTicketSharp /> &nbsp;Buy Tickets
            </StyledRedButton> */}
          </StyledFirstContainer2>
        </StyledFirstContainer>

        <StyledFirstContainer>
          <StyledFirstContainer1>
            <StyledHeading3> Date and Time</StyledHeading3>
            <StyledParagraph>
              <BiCalendar />
              &nbsp; Saturday, 2 December 2023
            </StyledParagraph>
            <StyledParagraph>
              <FiClock />
              &nbsp; 6:30 PM - 9:30PM
            </StyledParagraph>
          </StyledFirstContainer1>
        </StyledFirstContainer>
        <StyledHeading3>Location</StyledHeading3>
        <StyledParagraph>
          <SlLocationPin /> &nbsp; Bal Gandharva Rang Mandir, Near Junction Of
          24th & 32nd Road &<br />
          Patwardhan Park,Off Linking Road, Bandra West., Mumbai, India
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
        <StyledParagraph>
          Get ready to kick off the Christmas season in Mumbai with SOUND OF
          CHRISTMAS - your favourite LIVE Christmas concert! City Youth Movement
          invites you to the 4th edition of our annual Christmas festivities -
          by the youth and for the youth! Feat. your favourite worship leaders,
          carols, quizzes and some exciting surprises! Bring your family and
          friends and sing along your favourite Christmas carols on the 2nd of
          December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra
          West. Book your tickets now!
        </StyledParagraph>
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

export default EventInfo;
