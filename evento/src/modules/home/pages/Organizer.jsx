import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

import {
  Head,
  Tickets,
  CardGroup,
  Eventname,
  StyledCard,
  StyledCardOverflow,
  StyledAspectRatio,
  StyledCardContent,
  StyledCardTypography,
  CardOutline,
} from "../components/atoms.js";
import icon from "../../../assets/Organizer.png";

const EventCard = ({
  event = {
    categoryTitle: "Samarth Event",
    img: icon,
    favCount: "78",
    EventCount: "102",
  },
}) => (
  <CardOutline>
    <StyledCard variant="outlined">
      <StyledAspectRatio ratio="2">
        <img src={event.img} loading="lazy" alt="" />
      </StyledAspectRatio>
      <StyledCardContent>
        <Eventname>{event.categoryTitle}</Eventname>
        <Tickets className="tickets" orientation="horizontal">
          <div className="price">{event.favCount}Followers</div>
          <div className="interested">{event.EventCount} Events</div>
        </Tickets>
        <Button>
          <a href="#">Follow</a>
        </Button>
      </StyledCardContent>
    </StyledCard>
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
            favCount: "78",
            EventCount: "102",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Samarth Event",
            img: icon,
            favCount: "78",
            EventCount: "102",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Samarth Event",
            img: icon,
            favCount: "78",
            EventCount: "102",
          }}
        />
      </CardGroup>
    </>
  );
}
