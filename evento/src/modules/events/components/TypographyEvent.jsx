import React from "react";
import Typography from "@mui/joy/Typography";
import { Eventname, Eventadd, Eventtime } from "../../Home/components/atoms";
const TypographyEvent = ({ event, formatEventTime }) => (
  <Typography variant="body-sm">
    <Eventname>{event.Additional_information}</Eventname>
    <Eventadd>{event.location}</Eventadd>
    <Eventtime>
      {formatEventTime(event.start_date_time, event.end_date_time)}
    </Eventtime>
  </Typography>
);

export default TypographyEvent;
