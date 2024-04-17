import * as React from "react";

import {
  Head,
  Tickets,
  CardGroup,
  Eventname,
  StyledCardOrganizer,
  StyledCardOverflow,
  StyledAspectRatio,
  StyledCardContent,
  StyledCardTypography,
  CardOutline,
  StyledOrgButton,
  StyledPrice,
  StyledOrgInterest,
} from "../components/atoms";

import icon from "../../../assets/Organizer.png";

const EventCard = ({
  event = {
    categoryTitle: "Samarth Event",
    img: icon,
    favCount: "978",
    EventCount: "102",
  },
}) => (
  <CardOutline>
    <StyledCardOrganizer variant="outlined">
      {/* <StyledAspectRatio ratio="2"> */}
      <img src={event.img} loading="lazy" alt="" />
      {/* </StyledAspectRatio> */}
      <StyledCardContent>
        <Eventname style={{ marginLeft: "79px" }}>
          <p>{event.categoryTitle}</p>
        </Eventname>
        <Tickets
          className="tickets"
          style={{ display: "flex", marginLeft: "77px", marginTop: "10px" }}
          orientation="horizontal"
        >
          <StyledPrice className="price">
            <h4>{event.favCount}</h4>
            <p>Followers</p>
          </StyledPrice>

          <StyledOrgInterest className="interested">
            <h4>{event.EventCount}</h4>
            <p>Events</p>
          </StyledOrgInterest>
        </Tickets>
        <StyledOrgButton>
          <p>Follow</p>
        </StyledOrgButton>
      </StyledCardContent>
    </StyledCardOrganizer>
  </CardOutline>
);
export default function BestEvent() {
  return (
    <>
      <Head>Organizers to follow</Head>
      <CardGroup>
        <EventCard
          event={{
            categoryTitle: "Samarth Event",
            img: icon,
            favCount: "978",
            EventCount: "102",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Samarth Event",
            img: icon,
            favCount: "978",
            EventCount: "102",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Samarth Event",
            img: icon,
            favCount: "978",
            EventCount: "102",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Samarth Event",
            img: icon,
            favCount: "978",
            EventCount: "102",
          }}
        />
      </CardGroup>
    </>
  );
}
