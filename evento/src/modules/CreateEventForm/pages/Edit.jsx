import React, { useState } from "react";
import { connect } from "react-redux";
import { saveEvent } from "../Redux/actions/editactions.js";
import { Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
} from "../components/atoms.js";
import { options, placeOptions, textAreas } from "../data/Edit.json";
import DialogPopup from "../pages/DialogPopup.jsx";

const Edit = ({ saveEvent, setCurrentStep }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isPlaceDropdownOpen, setIsPlaceDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [textAreaValues, setTextAreaValues] = useState(
    Array(textAreas.length).fill("")
  );

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setIsPlaceDropdownOpen(false);
  };
  const openDialog = (message) => {
    setModalMessage(message);
    setModalOpen(true);
  };
  const handleTextAreaChange = (index, value) => {
    const newTextAreas = [...textAreaValues];
    newTextAreas[index] = value;
    setTextAreaValues(newTextAreas);
  };
  const handleSaveAndContinue = async () => {
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
    if (!validateEventDetails()) {
      openDialog("Message");
      return;
    }

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

    try {
      await saveEvent(eventData);
      setCurrentStep(1);
      navigate("/createeventform/banner");
    } catch (error) {
      console.error("Failed to save event:", error);
      openDialog("Failed to save event data. Please try again.");
    }
  };

  const validateEventDetails = () => {
    const isEventTitleValid = eventTitle.trim() !== "";
    const isEventCategoryValid = selectedOption.trim() !== "";
    const isStartDateValid = startDate !== null;
    const isEndDateValid = endDate !== null;
    const isLocationValid = selectedPlace.trim() !== "";

    return (
      isEventTitleValid &&
      isEventCategoryValid &&
      isStartDateValid &&
      isEndDateValid &&
      isLocationValid
    );
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
            value={eventTitle}
            onChange={(e) => {
              setEventTitle(e.target.value);
            }}
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
                  key={option.id}
                  className="dropdown-item"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => handleOptionClick(option.id, option.title)}
                >
                  <span>{option.title}</span>
                </StyledDropdownItem>
              ))}
            </StyledDropdownMenu>
          </div>
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

        {textAreas.map((textArea, index) => (
          <StyledDiscriptionTitle
            key={index}
            className="qt-event-discription-title"
          >
            <StyledLocationB>{textArea.title}</StyledLocationB>
            <StyledTextArea
              className="event-textarea"
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
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <DialogPopup
            handleCloseModal={handleCloseModal}
            modalMessage={modalMessage}
          />
        </Modal>
      </StyledCreateEvent>
    </LocalizationProvider>
  );
};
const mapDispatchToProps = {
  saveEvent,
};

export default connect(null, mapDispatchToProps)(Edit);
