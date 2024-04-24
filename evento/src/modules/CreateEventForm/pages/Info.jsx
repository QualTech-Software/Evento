import React, { useState } from "react";
import { connect } from "react-redux";
import { saveEvent } from "../Redux/actions/editactions.js";
import { Modal, Typography, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import { DemoItem, DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Box from "@mui/material/Box";
import { arrowdropdown, venue, online } from "../../../icons/index.js";
import VenueDetails from "../components/VenueDetails .jsx";
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
  StyledLocationB,
  StyledEventLocationTitle,
  StyledLocationLabel,
  StyledDiscriptionTitle,
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
  ErrorMessage,
  StyledLocationError,
} from "../components/atoms.js";
import { options, placeOptions, textAreas } from "../data/Edit.json";

const Info = ({ saveEvent, setCurrentStep }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isPlaceDropdownOpen, setIsPlaceDropdownOpen] = useState(false);
  const [venueDetails, setVenueDetails] = useState({
    venueName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [showVenueDetails, setShowVenueDetails] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [textAreaValues, setTextAreaValues] = useState(
    Array(textAreas.length).fill("")
  );
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form has been submitted

  const navigate = useNavigate();

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    if (!isCategoryDropdownOpen) {
      setIsPlaceDropdownOpen(false);
      setSelectedOption("");
    }
  };
  const togglePlaceDropdown = () => {
    setIsPlaceDropdownOpen(!isPlaceDropdownOpen);

    // Hide venue details without resetting them
    setShowVenueDetails(false);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setIsPlaceDropdownOpen(false);
    setShowVenueDetails(place === "Venue");
  };

  const handleVenueDetailChange = (e) => {
    const { name, value } = e.target;
    setVenueDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check if all venue details are filled
    const { venueName, address, city, state, country, zipCode } = {
      ...venueDetails,
      [name]: value,
    };
    const allFilled =
      venueName && address && city && state && country && zipCode;
    setShowVenueDetails(!allFilled);
  };

  const handleOptionClick = async (optionId, optionTitle) => {
    console.log("Selected Category ID:", optionId); // Logging the category ID
    try {
      setSelectedCategory(optionId); // This will now hold the ID
      setSelectedOption(optionTitle); // This will now hold the Title for display
      setIsCategoryDropdownOpen(false);
    } catch (error) {
      console.error("Error handling category selection:", error);
    }
  };

  const handleTextAreaChange = (index, value) => {
    const newTextAreas = [...textAreaValues];
    newTextAreas[index] = value;
    setTextAreaValues(newTextAreas);
  };

  const venueDetailsFilled = () => {
    const { venueName, address, city, state, country, zipCode } = venueDetails;
    return (
      venueName.trim() &&
      address.trim() &&
      city.trim() &&
      state.trim() &&
      country.trim() &&
      zipCode.trim()
    );
  };

  const validateForm = () =>
    eventTitle.trim() &&
    selectedOption &&
    selectedPlace &&
    (selectedPlace !== "Venue" || venueDetailsFilled()) &&
    startDate &&
    endDate &&
    startTime &&
    endTime;

  const handleSaveAndContinue = async () => {
    setFormSubmitted(true); // Set formSubmitted to true on Save & Continue click

    if (!validateForm()) {
      return;
    }

    const additionalInformation = textAreaValues[0];
    const rulesRegulations = textAreaValues[1];
    const formattedStartDate =
      startDate && startTime
        ? `${startDate.format("YYYY-MM-DD")}T${startTime.format("HH:mm:ss")}`
        : "";
    const formattedEndDate =
      endDate && endTime
        ? `${endDate.format("YYYY-MM-DD")}T${endTime.format("HH:mm:ss")}`
        : "";

    // Create an event object based on location type
    const eventData = {
      title: eventTitle,
      category_id: selectedCategory,
      start_date_time: formattedStartDate,
      end_date_time: formattedEndDate,
      location: selectedPlace,
      additional_information: additionalInformation,
      rules_regulations: rulesRegulations,
      is_online: "1",
      is_approved: "1",
    };

    // Conditionally add venue details if the event is at a venue
    if (selectedPlace === "Venue") {
      eventData.venue_name = venueDetails.venueName;
      eventData.address = venueDetails.address;
      eventData.city = venueDetails.city;
      eventData.state = venueDetails.state;
      eventData.country = venueDetails.country;
      eventData.zip_code = parseInt(venueDetails.zipCode, 10);
    }

    try {
      await saveEvent(eventData);
      setCurrentStep(1);
      navigate("/createeventform/banner");
    } catch (error) {
      console.error("Failed to save event:", error);
    }
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
        <StyledEventTitle
          className={`qt-event-title${
            formSubmitted && !eventTitle.trim() ? " error" : ""
          }`}
        >
          <StyledEventLabel>Event Title</StyledEventLabel>
          <StyledEventinput
            type="text"
            placeholder="Enter the name of your event"
            value={eventTitle}
            onChange={(e) => {
              setEventTitle(e.target.value);
            }}
            showError={formSubmitted && !eventTitle.trim()}
          />
          {formSubmitted && !eventTitle.trim() && (
            <span className="error-message">Title is required</span>
          )}
        </StyledEventTitle>
        <StyledEventCategory className="qt-event-category">
          <StyledCategoryLabel>Event Category</StyledCategoryLabel>

          <StyledCategoryInput
            type="text"
            placeholder="Please select one"
            value={selectedOption}
            readOnly
            onClick={toggleCategoryDropdown}
            className={selectedOption ? "selected" : ""}
            showError={formSubmitted && !selectedOption}
          />
          <StyledArrowDropdown
            src={arrowdropdown}
            className="qt-event-arrowdropdown"
            alt="Dropdown Arrow"
            onClick={toggleCategoryDropdown}
          />
          <StyledDropdownMenu
            className={`dropdown-menu${isCategoryDropdownOpen ? " open" : ""}`}
          >
            {options.map((option, index) => (
              <StyledDropdownItem
                key={option.id}
                className="dropdown-item"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => handleOptionClick(option.id, option.title)}
              >
                <span>{option.title}</span>
              </StyledDropdownItem>
            ))}
          </StyledDropdownMenu>
          {formSubmitted && !selectedOption && (
            <ErrorMessage>Category is required</ErrorMessage>
          )}
        </StyledEventCategory>
        <StyledEventDates className="qt-event-dates">
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
                value={startDate}
                onChange={(date) => setStartDate(date)}
                className="custom-datepicker"
                inputProps={{ readOnly: true }}
              />
            </DemoItem>
          </Box>
          <StyledEventStartTime className="qt-event-starttime">
            <label>Start Time</label>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                value={startTime}
                onChange={(time) => setStartTime(time)}
                renderInput={(params) => <TextField {...params} />}
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
                inputProps={{ readOnly: true }}
                minDate={startDate}
              />
            </DemoItem>
          </div>
          <StyledEventStartTime className="qt-event-starttime">
            <label>End Time</label>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                value={endTime}
                onChange={(time) => setEndTime(time)}
                renderInput={(params) => <TextField {...params} />}
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
            style={{
              border:
                formSubmitted &&
                (!selectedPlace ||
                  (selectedPlace === "Venue" && !venueDetailsFilled()))
                  ? "1px solid red"
                  : "",
            }}
          />
          <StyledArrowDropdown
            src={arrowdropdown}
            className="qt-event-arrowdropdown"
            alt="Dropdown Arrow"
            onClick={togglePlaceDropdown}
          />
          {!selectedPlace && formSubmitted && (
            <StyledLocationError>Location is required</StyledLocationError>
          )}

          <StyledEventDropdownPlace
            className={`dropdown-menu${
              isPlaceDropdownOpen ? " open where-event-place-dropdown" : ""
            }`}
          >
            {placeOptions.map((placeOption, index) => (
              <StyledDropdownItems
                key={index}
                className="dropdown-items"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => handlePlaceSelect(placeOption)}
              >
                {placeOption === "Venue" ? (
                  <>
                    <StyledEventVenue src={venue} className="qt-event-venue" />
                    <span>{placeOption}</span>
                    <span className="venue-placeholder"></span>
                  </>
                ) : (
                  <>
                    <StyledEventOnline
                      src={online}
                      className="qt-event-online"
                    />
                    <span>{placeOption}</span>
                    <span className="online-placeholder"></span>
                  </>
                )}
              </StyledDropdownItems>
            ))}
          </StyledEventDropdownPlace>
        </StyledEventLocationTitle>
        {showVenueDetails && (
          <VenueDetails
            venueDetails={venueDetails}
            handleVenueDetailChange={handleVenueDetailChange}
            formSubmitted={formSubmitted} // Pass formSubmitted to the VenueDetails component
          />
        )}

        {textAreas.map((textArea, index) => (
          <StyledDiscriptionTitle
            key={index}
            className="qt-event-discription-title"
          >
            <StyledLocationB>{textArea.title}</StyledLocationB>
            <StyledTextArea
              className={`event-textarea ${
                formSubmitted && !textAreaValues[index].trim()
                  ? "error-input"
                  : ""
              }`}
              name={textArea.name}
              placeholder={textArea.placeholder}
              rows="10"
              cols="118"
              value={textAreaValues[index]}
              onChange={(e) => handleTextAreaChange(index, e.target.value)}
            />
          </StyledDiscriptionTitle>
        ))}
        <StyledEventButton
          className="event-button"
          onClick={handleSaveAndContinue}
        >
          <StyledEventButtonP>Save & Continue</StyledEventButtonP>
        </StyledEventButton>
      </StyledCreateEvent>
    </LocalizationProvider>
  );
};

const mapDispatchToProps = {
  saveEvent,
};

export default connect(null, mapDispatchToProps)(Info);
