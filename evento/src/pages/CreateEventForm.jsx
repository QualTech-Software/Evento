import React, { useState } from "react";
import { arrow, editfilled, bannerfilled } from "../icons/index.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  NewEvent,
  EventEdit,
  StyledNewEventh1,
  StyledArrow,
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
const Step = ({ stepNumber, step }) => (
  <div className={`qt-step qt-step-${stepNumber}`}>
    <img src={step.icon} className="qt-step-icon" />
    {step.label === "Info" ? (
      <InfoLabel>{step.label}</InfoLabel>
    ) : (
      <CommonLabel>{step.label}</CommonLabel>
    )}
  </div>
);

const CreateEventForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  return (
    <NewEvent className="qt-newevent">
      <StyledArrow
        src={arrow}
        className="qt-event-arrow"
        onClick={goToPreviousPage}
      />
      <StyledNewEventh1>Create a New Event</StyledNewEventh1>

      {/* Map over steps array and render each step dynamically */}
      <EventEdit className="qt-event-edit">
        {steps.map((step, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            step={{
              ...step,
              icon: index <= currentStep ? editfilled : step.icon,
            }}
          />
        ))}
      </EventEdit>
      <Routes>
        <Route
          path="/banner"
          element={<Info setCurrentStep={setCurrentStep} />}
        />
        <Route path="/" element={<Banner setCurrentStep={setCurrentStep} />} />
        <Route
          path="/ticketing"
          element={<Ticketing setCurrentStep={setCurrentStep} />}
        />
        <Route
          path="/review"
          element={<Review setCurrentStep={setCurrentStep} />}
        />
      </Routes>
    </NewEvent>
  );
};

export default CreateEventForm;
