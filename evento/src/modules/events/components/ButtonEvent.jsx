import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import { StyledButtonGroup } from "../../Home/components/atoms";
import { format, addDays, getDay } from "date-fns";

const ButtonEvent = ({ setFilters, categoryId }) => {
  const [activeButton, setActiveButton] = useState("");
  const getCurrentDate = () => {
    return new Date().toISOString().slice(0, 10);
  };

  const handleTodayClick = () => {
    const today = getCurrentDate();
    setFilters({
      dates: [today],
      is_paid: null,
      category_id: categoryId,
    });
    setActiveButton("today");
  };

  useEffect(() => {
    handleTodayClick();
  }, []);

  const handleTomorrowClick = () => {
    const tomorrow = addDays(new Date(), 1);
    const tomorrowFormatted = tomorrow.toISOString().slice(0, 10);
    setFilters({
      dates: [tomorrowFormatted],
      is_paid: null,
      category_id: categoryId,
    });
    setActiveButton("tomorrow");
  };

  const handleFreeClick = () => {
    setFilters({ dates: [], is_paid: 0, category_id: categoryId });
    setActiveButton("free");
  };

  const handleWeekendClick = () => {
    const today = new Date();
    const currentDay = getDay(today);
    const daysUntilSaturday = 6 - currentDay;
    const daysUntilSunday = 7 - currentDay;

    const saturday = addDays(today, daysUntilSaturday);
    const sunday = addDays(today, daysUntilSunday);

    setFilters({
      dates: [format(saturday, "yyyy-MM-dd"), format(sunday, "yyyy-MM-dd")],
      is_paid: null,
      category_id: categoryId,
    });
    setActiveButton("weekend");
  };

  return (
    <StyledButtonGroup
      sx={{
        borderRadius: 8,
      }}
    >
      <Button
        className="btn-default"
        onClick={handleTodayClick}
        style={{
          backgroundColor: activeButton === "today" ? "red" : "initial",
        }}
      >
        Today
      </Button>
      <Button
        className="btn-tom"
        onClick={handleTomorrowClick}
        style={{
          backgroundColor: activeButton === "tomorrow" ? "red" : "initial",
        }}
      >
        Tomorrow
      </Button>
      <Button
        className="btn-week"
        onClick={handleWeekendClick}
        style={{
          backgroundColor: activeButton === "weekend" ? "red" : "initial",
        }}
      >
        This Weekend
      </Button>
      <Button
        className="btn-free"
        onClick={handleFreeClick}
        style={{ backgroundColor: activeButton === "free" ? "red" : "initial" }}
      >
        Free
      </Button>
    </StyledButtonGroup>
  );
};

export default ButtonEvent;
