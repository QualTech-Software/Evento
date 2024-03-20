import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { arrowdropdown, venue, online } from "./icons";
import { DemoItem, DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Box from "@mui/material/Box";
import { arrowdropdown, venue, online } from "../../../icons";
import {
  StyledCreateEvent,
  Styledeventh5,
  StyledEventTitle,
  StyledEventCategory,
  StyledDropdownMenu,
  StyledEventDropdownPlace,
  StyledEventDates,
  StyledEventStartTime,
  StyledLocationh5,
  StyledEventLocationTitle,
  StyledLocationLabel,
  StyledDiscriptionTitle,
  StyledDiscriptionh5,
  StyledEventButton,
  StyledEventButtonP,
  StyledTextArea,
  StyledEventLabel,
  StyledEventinput,
  StyledCategoryLabel,
  StyledCategoryInput,
  StyledArrowDropdown,
  StyledDropdownItem,
  StyledLocationInput,
  StyledEventVenue,
  StyledEventOnline,
  StyledDropdownItems,
} from "../components/atoms.js";

const options = [
  "Culture and Arts",
  "Education and Business",
  "Entertainment",
  "Food & Drink",
  "Technology & Innovation",
  "Travel & Adventure",
];
const placeOptions = ["Venue", "Online"];

export default function Edit() {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isPlaceDropdownOpen, setIsPlaceDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [cleared, setCleared] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    if (!isCategoryDropdownOpen) {
      setIsPlaceDropdownOpen(false);
      setSelectedOption("");
    }
  };
  const togglePlaceDropdown = () => {
    setIsPlaceDropdownOpen(!isPlaceDropdownOpen);
    if (!isPlaceDropdownOpen) {
      setIsCategoryDropdownOpen(false);
      setSelectedPlace("");
    }
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCategoryDropdownOpen(false);
  };
  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setIsPlaceDropdownOpen(false);
  };
  const handleSaveAndContinue = () => {
    setStep(2);
    navigate("/banner"); // Replace "/next-page" with the path of your next page
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch", height: "129px" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <StyledCreateEvent className="qt-createevent">
        <Styledeventh5 className="qt-event-h5">Event Details</Styledeventh5>
        <StyledEventTitle className="qt-event-title">
          <StyledEventLabel>Event Title</StyledEventLabel>
          <StyledEventinput
            type="text"
            placeholder="Enter the name of your event"
          />
        </StyledEventTitle>
        <StyledEventCategory className="qt-event-category">
          <StyledCategoryLabel>Event Category</StyledCategoryLabel>
          <div className="dropdown-container">
            <StyledCategoryInput
              type="text"
              placeholder="Please select one"
              value={selectedOption}
              readOnly
              onClick={toggleCategoryDropdown}
              className={selectedOption ? "selected" : ""}
            />
            <StyledArrowDropdown
              src={arrowdropdown}
              className="qt-event-arrowdropdown"
              alt="Dropdown Arrow"
              onClick={toggleCategoryDropdown}
            />
            <StyledDropdownMenu
              className={`dropdown-menu${
                isCategoryDropdownOpen ? " open" : ""
              }`}
            >
              {options.map((option, index) => (
                <StyledDropdownItem
                  key={option}
                  className={`dropdown-item`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option}</span>
                </StyledDropdownItem>
              ))}
            </StyledDropdownMenu>
          </div>
        </StyledEventCategory>
        <StyledEventDates className="qt-event-dates">
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <DemoItem label="Start Date">
              <DatePicker
                className="custom-datepicker"
                slotProps={{
                  field: {
                    clearable: true,
                    onClear: () => setCleared(true),
                  },
                }}
              />
            </DemoItem>
            {/* Other date picker components */}
          </Box>
          {/* </LocalizationProvider> */}
          <StyledEventStartTime className="qt-event-starttime">
            <label>Start Time</label>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
            </DemoContainer>
          </StyledEventStartTime>
          <div className="qt-event-startdate">
            <DemoItem label="End Date">
              <DatePicker
                value={endDate}
                onChange={(date) => setEndDate(date)}
                className="custom-datepicker"
                slotProps={{
                  field: {
                    clearable: true,
                    onClear: () => setCleared(true),
                  },
                }}
              />
            </DemoItem>
          </div>
          <StyledEventStartTime className="qt-event-starttime">
            <label>End Time</label>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
            </DemoContainer>
          </StyledEventStartTime>
        </StyledEventDates>
        <StyledLocationh5 className="qt-event-location-h5">
          Location
        </StyledLocationh5>
        <StyledEventLocationTitle className="qt-event-location-title">
          <StyledLocationLabel>
            Where will your event take place?
          </StyledLocationLabel>
          <StyledLocationInput
            type="text"
            placeholder="Please select one"
            value={selectedPlace}
            readOnly
            onClick={togglePlaceDropdown}
            className={selectedPlace ? "selected" : ""}
          />
          <StyledArrowDropdown
            src={arrowdropdown}
            className="qt-event-arrowdropdown"
            alt="Dropdown Arrow"
            onClick={togglePlaceDropdown}
          />
          <StyledEventDropdownPlace
            className={`dropdown-menu${
              isPlaceDropdownOpen ? " open where-event-place-dropdown" : ""
            }`}
          >
            {placeOptions.map((placeOption, index) => (
              <StyledDropdownItems
                key={index}
                className={`dropdown-items`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => handlePlaceSelect(placeOption)}
              >
                {placeOption === "Venue" ? (
                  <>
                    <StyledEventVenue src={venue} className="qt-event-venue" />
                    <span>{placeOption}</span>
                    <span className="venue-placeholder"></span>{" "}
                    {/* Placeholder for Venue */}
                  </>
                ) : (
                  <>
                    <StyledEventOnline
                      src={online}
                      className="qt-event-online"
                    />
                    <span>{placeOption}</span>
                    <span className="online-placeholder"></span>{" "}
                    {/* Placeholder for Online */}
                  </>
                )}
              </StyledDropdownItems>
            ))}
          </StyledEventDropdownPlace>
        </StyledEventLocationTitle>
        <StyledLocationh5 className="qt-event-location-h5">
          Additional Information
        </StyledLocationh5>
        <StyledDiscriptionTitle className="qt-event-discription-title">
          <StyledDiscriptionh5>Event Description</StyledDiscriptionh5>
          <StyledTextArea
            className="event-textarea"
            name="postContent"
            placeholder="Describe what's special about your event & other important details."
            rows={10}
            cols={40}
          />
        </StyledDiscriptionTitle>
        <StyledLocationh5 className="qt-event-location-h5">
          Rules and Regulations
        </StyledLocationh5>
        <StyledEventButton
          step={step}
          className="event-button"
          onClick={handleSaveAndContinue}
        >
          <StyledEventButtonP>Save & Continue</StyledEventButtonP>
        </StyledEventButton>
      </StyledCreateEvent>
    </LocalizationProvider>
  );
}
