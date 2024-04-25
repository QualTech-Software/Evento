import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

import {
  Head,
  Eventname,
  Eventadd,
  Eventtime,
  Tickets,
  CardGroup,
  Text,
  StyledCard,
  StyledCardOverflow,
  StyledAspectRatio,
  StyledIconButton,
  StyledCardContent,
  StyledCardTypography,
  CardOutline,
  StyledButtonGroup,
} from "../components/atoms.js";
import {
  icon1,
  ticket,
  banner,
  star,
  ellipse,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  vector,
} from "../../../assets/index.js";

const EventCard = ({
  event = {
    categoryTitle: "Travel & Adventure",
    img: banner1,
    price: "INR 1,400",
    date: "NOV 25 - 26",
    name: "Lakeside Camping at Pawna",
    description: "Adventure Geek - Explore the Unexplored, Mu.",
    time: "8:30 AM - 7:30 PM",
    favCount: "14",
  },
}) => (
  <CardOutline>
    <a href="/eventcarousel">
      <StyledCard variant="outlined">
        <StyledCardOverflow>
          <StyledAspectRatio ratio="2">
            <img src={event.img} loading="lazy" alt="" />
          </StyledAspectRatio>
          <StyledIconButton size="md" variant="solid" backgroundcolor="#fff">
            <img src={vector} loading="lazy" alt="" />
          </StyledIconButton>
          <Text>{event.categoryTitle}</Text>
        </StyledCardOverflow>
        <StyledCardContent>
          <StyledCardTypography level="title-md">
            <img src={icon1} />
            {event.date}
          </StyledCardTypography>
          <Typography level="body-sm">
            <Eventname>{event.name}</Eventname>
            <Eventadd>{event.description}</Eventadd>
            <Eventtime>{event.time}</Eventtime>
          </Typography>
          <Tickets className="tickets" orientation="horizontal">
            <div className="price">
              <img src={ticket} />
              {event.price}
            </div>
            <div className="ellipse">
              <img src={ellipse} />
            </div>

            <div className="interested">
              <img src={star} />
              {event.favCount} interested
            </div>
          </Tickets>
        </StyledCardContent>
      </StyledCard>
    </a>
  </CardOutline>
);
export default function BestEvent() {
  return (
    <>
      <Head>Popular Events in Kolhapur</Head>
      <StyledButtonGroup
        sx={{
          borderRadius: 8,
        }}
      >
        <Button className=" btn-default">Today</Button>
        <Button className=" btn-tom ">Tomorrow</Button>
        <Button className=" btn-week">This Weekend</Button>
        <Button className=" btn-free">Free</Button>
      </StyledButtonGroup>
      <CardGroup>
        <EventCard
          event={{
            categoryTitle: "Travel & Adventure",
            img: banner,
            price: "₹ 1,400",
            date: "NOV 25 - 26",
            name: "Lakeside Camping at Pawna",
            description: "Adventure Geek - Explore the Unexplored, Mu.",
            time: "8:30 AM - 7:30 PM",
            favCount: "14",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Educational & Business",
            img: banner1,
            price: "₹ 1,400",
            date: "NOV 25 - 26",
            name: "Lakeside Camping at Pawna",
            description: "Adventure Geek - Explore the Unexplored, Mu.",
            time: "8:30 AM - 7:30 PM",
            favCount: "14",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Travel & Adventure",
            img: banner2,
            price: "₹ 1,400",
            date: "NOV 25 - 26",
            name: "Lakeside Camping at Pawna",
            description: "Adventure Geek - Explore the Unexplored, Mu.",
            time: "8:30 AM - 7:30 PM",
            favCount: "14",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Sports & Fitness",
            img: banner3,
            price: "₹ 1,400",
            date: "NOV 25 - 26",
            name: "Lakeside Camping at Pawna",
            description: "Adventure Geek - Explore the Unexplored, Mu.",
            time: "8:30 AM - 7:30 PM",
            favCount: "14",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Travel & Adventure",
            img: banner4,
            price: "₹ 1,400",
            date: "NOV 25 - 26",
            name: "Lakeside Camping at Pawna",
            description: "Adventure Geek - Explore the Unexplored, Mu.",
            time: "8:30 AM - 7:30 PM",
            favCount: "14",
          }}
        />
        <EventCard
          event={{
            categoryTitle: "Cultural & Arts",
            img: banner5,
            price: "₹ 1,400",
            date: "NOV 25 - 26",
            name: "Lakeside Camping at Pawna",
            description: "Adventure Geek - Explore the Unexplored, Mu.",
            time: "8:30 AM - 7:30 PM",
            favCount: "14",
          }}
        />
      </CardGroup>
    </>
  );
}
