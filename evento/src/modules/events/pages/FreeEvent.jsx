import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Head,
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
import { vector, icon1 } from "../../../assets/index.js";
import { format } from "date-fns";
import TicketSection from "../components/TicketSection.jsx";
import TypographyEvent from "../components/TypographyEvent.jsx";
const FreeEvent = ({ events, loading, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (events?.length > 0) {
      console.log("Events:", events);
    }
  }, [events]);

  const freeEvents = events?.filter((event) => event.is_paid === 0) || [];

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
      )}-${endDay} ${getMonthAbbreviation(endMonth)}`;
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
              <TypographyEvent
                event={event}
                formatEventTime={formatEventTime}
              />
              <TicketSection />
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
