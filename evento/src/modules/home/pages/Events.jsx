import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
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
  StyledLink,
} from "../../Home/components/atoms.js";
import { fetchEventsRequest } from "../redux/action/action.js";
import { vector } from "../../../assets/index.js";
import { ticket, ellipse, star, icon1 } from "../../../assets/index.js";

const Onlineevents = ({ events, loading, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (events.length > 0) {
      console.log("Events:", events);
    }
  }, [events]);

  return (
    <>
      <Head>Popular Events in Kolhapur</Head>
      <StyledButtonGroup
        sx={{
          borderRadius: 8,
        }}
      >
        <Button className="btn-default">Today</Button>{" "}
        <Button className="btn-tom">Tomorrow</Button>{" "}
        <Button className="btn-week">This Weekend</Button>{" "}
        <Button className="btn-free">Free</Button>
      </StyledButtonGroup>
      <StyledLink to="/eventcarousel" className="home-createevent">
        <CardOutline style={{ display: "flex" }}>
          {events.slice(0, 3).map((event) => (
            <StyledCard
              key={event.id}
              variant="outlined"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <StyledCardOverflow>
                <StyledAspectRatio ratio={2}>
                  {event.files &&
                    JSON.parse(event.files).map((file, index) => (
                      <img
                        key={index}
                        src={file.path}
                        alt={`Image ${file.path}`}
                      />
                    ))}
                </StyledAspectRatio>

                <StyledIconButton
                  size="md"
                  variant="solid"
                  backgroundcolor="#fff"
                >
                  <img src={vector} loading="lazy" alt="" />
                </StyledIconButton>
                <Text>{event.title}</Text>
              </StyledCardOverflow>

              <StyledCardContent>
                <StyledCardTypography level="title-md">
                  <img src={icon1} alt="Icon" />
                  {event.start_date_time}{" "}
                </StyledCardTypography>

                <Typography level="body-sm">
                  <Eventname>{event.Additional_information}</Eventname>
                  <Eventadd>{event.location}</Eventadd>
                  <Eventtime>{event.end_date_time}</Eventtime>{" "}
                </Typography>

                <Tickets className="tickets" orientation="horizontal">
                  <div className="price">
                    <img src={ticket} alt="Ticket Icon" /> INR 1,400
                  </div>

                  <div className="ellipse">
                    <img src={ellipse} alt="Ellipse Icon" />
                  </div>

                  <div className="interested">
                    <img src={star} alt="Star Icon" />
                    14 interested
                  </div>
                </Tickets>
              </StyledCardContent>
            </StyledCard>
          ))}
        </CardOutline>
      </StyledLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Onlineevents);
