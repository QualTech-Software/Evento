import React, { useState, useEffect } from "react";
import { arrow, editfilled, bannerfilled } from "../icons/index.js";
import { Route, Routes } from "react-router-dom";
import {
  NewEvent,
  EventEdit,
  StyledNewEventh1,
  InfoLabel,
  CommonLabel,
} from "../modules/CreateEventForm/components/atoms.js";
import Info from "../modules/CreateEventForm/pages/Banner.jsx";
import Banner from "../modules/CreateEventForm/pages/Info.jsx";
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
const Step = ({ stepNumber, step, currentStep }) => (
  <div className={`qt-step qt-step-${stepNumber}`}>
    <img src={step.icon} className="qt-step-icon" />
    {currentStep + 1 >= stepNumber ? (
      <InfoLabel>{step.label}</InfoLabel>
    ) : (
      <CommonLabel>{step.label}</CommonLabel>
    )}
  </div>
);

const CreateEventForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [isPaidEvent, setIsPaidEvent] = useState(false);
  console.log("setIsPaidEvent, isPaidEvent", setIsPaidEvent, isPaidEvent);
  useEffect(() => {
    console.log("hello");
  }, [isPaidEvent]);

  console.log("reRenderd");

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
          path="/banner"
          element={
            <Info
              setIsPaidEvent={setIsPaidEvent}
              setCurrentStep={setCurrentStep}
              isPaidEvent={isPaidEvent}
            />
          }
        />
        <Route
          path="/"
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
