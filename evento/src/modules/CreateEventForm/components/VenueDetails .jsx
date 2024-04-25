import React from "react";
import PropTypes from "prop-types";
import { StyledVenueNames, StyledVenueTextfield } from "../components/atoms.js";

const VenueDetails = ({
  venueDetails,
  handleVenueDetailChange,
  formSubmitted,
}) => {
  const isEmpty = (value) => value.trim() === "";

  const fields = [
    { label: "Venue Name", name: "venueName" },
    { label: "Address", name: "address" },
    { label: "City", name: "city" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Zip Code", name: "zipCode" },
  ];

  return (
    <StyledVenueNames>
      {fields.map((field, index) => (
        <StyledVenueTextfield
          key={index}
          label={field.label}
          name={field.name}
          value={venueDetails[field.name]}
          onChange={handleVenueDetailChange}
          error={formSubmitted && isEmpty(venueDetails[field.name])}
          helperText={
            formSubmitted && isEmpty(venueDetails[field.name])
              ? `${field.label} is required`
              : ""
          }
        />
      ))}
    </StyledVenueNames>
  );
};

VenueDetails.propTypes = {
  venueDetails: PropTypes.object.isRequired,
  handleVenueDetailChange: PropTypes.func.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

export default VenueDetails;
