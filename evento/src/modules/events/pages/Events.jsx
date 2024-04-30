import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "@mui/joy/Button";
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
  StyledButtonGroup,
} from "../../Home/components/atoms.js";
import {
  TypographyEvent,
  TicketSection,
  ButtonEvent,
} from "../components/index.js";
import {
  fetchEventsRequest,
  fetchFilteredEventsRequest,
} from "../redux/action/action.js";
import { vector, icon1 } from "../../../assets/index.js";
import { useParams } from "react-router-dom";
import { format, addDays } from "date-fns";

const Onlineevents = ({ events, loading, fetchFilteredEventsRequest }) => {
  const { category_id } = useParams();

  useEffect(() => {
    fetchFilteredEvents({ category_id, dates: [getCurrentDate()] });
  }, [category_id]);

  useEffect(() => {}, [events]);

  const getCurrentDate = () => {
    return new Date().toISOString().slice(0, 10);
  };

  const handleTodayClick = () => {
    const today = getCurrentDate();
    fetchFilteredEvents({ category_id, dates: [today] });
  };

  const handleTomorrowClick = () => {
    const tomorrow = addDays(new Date(), 1).toISOString().slice(0, 10);
    fetchFilteredEvents({ category_id, dates: [tomorrow] });
  };

  const fetchFilteredEvents = (data) => {
    fetchFilteredEventsRequest(data);
  };

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
      <Head>Most Popular Events</Head>
      <ButtonEvent
        handleTodayClick={handleTodayClick}
        handleTomorrowClick={handleTomorrowClick}
      />
      <CardOutline style={{ display: "flex" }}>
        {events.map((event) => (
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
              <TicketSection event={event} />
            </StyledCardContent>
          </StyledCard>
        ))}
      </CardOutline>
    </>
  );
};

export default connect(
  ({ event: { events, loading } }) => ({
    events,
    loading,
  }),
  {
    fetchFilteredEventsRequest,
  }
)(Onlineevents);
