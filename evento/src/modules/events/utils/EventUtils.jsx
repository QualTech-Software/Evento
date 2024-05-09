import { format } from "date-fns";

export const formatDateRange = (start, end) => {
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

export const getMonthAbbreviation = (monthIndex) => {
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

export const formatEventTime = (start, end) => {
  const startTime = format(new Date(start), "h:mm a");
  const endTime = format(new Date(end), "h:mm a");
  return `${startTime} - ${endTime}`;
};
