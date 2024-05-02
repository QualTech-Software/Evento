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
import { format } from "date-fns";
import TicketSection from "../../events/components/TicketSection.jsx";
import TypographyEvent from "../../events/components/TypographyEvent.jsx";

const Onlineevents = ({ events, loading, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (events.length > 0) {
      console.log("Events:", events);
    }
  }, [events]);

  const formatDateRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();

    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();

    if (startMonth === endMonth) {
      return `${getMonthAbbreviation(startMonth)} ${startDay} - ${endDay}`;
    } else {
      return `${startDay} ${getMonthAbbreviation(
        startMonth
      )} - ${endDay} ${getMonthAbbreviation(endMonth)}`;
    }
  };

  const getMonthAbbreviation = (monthIndex) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return months[monthIndex];
  };

  const formatEventTime = (start, end) => {
    const startTime = format(new Date(start), "h:mm a");
    const endTime = format(new Date(end), "h:mm a");
    return `${startTime} - ${endTime}`;
  };

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
      <StyledLink to="/eventinformation" className="home-createevent">
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
                  {formatDateRange(event.start_date_time, event.end_date_time)}
                </StyledCardTypography>

                <TypographyEvent
                  event={event}
                  formatEventTime={formatEventTime}
                />

                <TicketSection event={event} />
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
