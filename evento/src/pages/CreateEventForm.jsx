import React, { useState, useEffect } from "react";
import { arrow, editfilled, bannerfilled } from "../icons/index.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  NewEvent,
  EventEdit,
  StyledNewEventh1,
  InfoLabel,
  CommonLabel,
} from "../modules/CreateEventForm/components/atoms.js";
import Banner from "../modules/CreateEventForm/pages/Banner.jsx";
import Info from "../modules/CreateEventForm/pages/Info.jsx";
import Ticketing from "../modules/CreateEventForm/pages/Ticketing.jsx";
import Review from "../modules/CreateEventForm/pages/Review.jsx";

// Define an array of steps
const steps = [
  { icon: editfilled, label: "Info" },
  { icon: bannerfilled, label: "Banner" },
  { icon: bannerfilled, label: "Ticketing" },
  { icon: bannerfilled, label: "Review" },
];

// Step component to render each step
const Step = ({ stepNumber, step, currentStep }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the corresponding page when the step is clickable
    if (currentStep + 1 >= stepNumber) {
      // Generate the route path based on the step label
      const routePath = step.label.toLowerCase();
      navigate(`/createeventform/${routePath}`);
    }
  };

  return (
    <div
      className={`qt-step qt-step-${stepNumber} ${
        currentStep + 1 >= stepNumber ? "clickable" : ""
      }`}
      onClick={handleClick}
    >
      <img src={step.icon} className="qt-step-icon" alt="Step Icon" />
      {currentStep + 1 >= stepNumber ? (
        <InfoLabel>{step.label}</InfoLabel>
      ) : (
        <CommonLabel>{step.label}</CommonLabel>
      )}
    </div>
  );
};

const CreateEventForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [isPaidEvent, setIsPaidEvent] = useState(false);
  return (
    <NewEvent className="qt-newevent">
      <StyledNewEventh1>Create a New Event</StyledNewEventh1>

      {/* Map over steps array and render each step dynamically */}
      <EventEdit className="qt-event-edit">
        {steps.map((step, index) => {
          return !isPaidEvent && index == 2 ? (
            <></>
          ) : (
            <Step
              key={index}
              stepNumber={index + 1}
              currentStep={currentStep}
              step={{
                ...step,
                icon: index <= currentStep ? editfilled : step.icon,
              }}
            />
          );
        })}
      </EventEdit>
      <Routes>
        <Route
          path="/info"
          element={
            <Info
              setIsPaidEvent={setIsPaidEvent}
              setCurrentStep={setCurrentStep}
              isPaidEvent={isPaidEvent}
            />
          }
        />
        <Route
          path="/banner"
          element={
            <Banner
              setIsPaidEvent={setIsPaidEvent}
              setCurrentStep={setCurrentStep}
              isPaidEvent={isPaidEvent}
            />
          }
        />
        <Route
          path="/ticketing"
          element={
            <Ticketing
              setCurrentStep={setCurrentStep}
              isPaidEvent={isPaidEvent}
            />
          }
        />
        <Route
          path="/review"
          element={
            <Review setCurrentStep={setCurrentStep} isPaidEvent={isPaidEvent} />
          }
        />
      </Routes>
    </NewEvent>
  );
};

export default CreateEventForm;
