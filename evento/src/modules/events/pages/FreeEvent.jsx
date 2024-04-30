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
} from "../../Home/components/atoms.js";
import { fetchEventsRequest } from "../redux/action/action.js";
import { vector } from "../../../assets/index.js";
import { ticket, ellipse, star, icon1 } from "../../../assets/index.js";
import { format } from "date-fns";

const FreeEvent = ({ events, loading, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (events?.length > 0) {
      console.log("Events:", events);
    }
  }, [events]);

  // Filter events where is_paid is 0
  const freeEvents = events?.filter((event) => event.is_paid === 0) || [];

  const formatDateRange = (start, end) => {
    const startDate = format(new Date(start), "d MMM");
    const endDate = format(new Date(end), "d MMM");
    return `${startDate} - ${endDate}`;
  };

  const formatEventTime = (start, end) => {
    const startTime = format(new Date(start), "h:mm a");
    const endTime = format(new Date(end), "h:mm a");
    return `${startTime} - ${endTime}`;
  };

  return (
    <>
      <Head>Free Events</Head>

      <CardOutline style={{ display: "flex" }}>
        {freeEvents.slice(0, 3).map((event) => (
          <StyledCard
            key={event.id}
            variant="outlined"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <StyledCardOverflow>
              <StyledAspectRatio ratio={2}>
                {JSON.parse(event.files).map((file, index) => (
                  <img key={index} src={file.path} alt={`Image ${file.path}`} />
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
                {formatDateRange(event.start_date_time, event.end_date_time)}
              </StyledCardTypography>
              <Typography level="body-sm">
                <Eventname>{event.Additional_information}</Eventname>
                <Eventadd>{event.location}</Eventadd>
                <Eventtime>
                  {formatEventTime(event.start_date_time, event.end_date_time)}
                </Eventtime>
              </Typography>
              <Tickets className="tickets" orientation="horizontal">
                <div className="price">
                  <img src={ticket} alt="Ticket Icon" />
                  Free
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

export default connect(mapStateToProps, mapDispatchToProps)(FreeEvent);
