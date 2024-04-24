import React from "react";
import PropTypes from "prop-types";
import { StyledVenueNames, StyledVenueTextfield } from "../components/atoms.js";

const VenueDetails = ({
  venueDetails,
  handleVenueDetailChange,
  formSubmitted,
}) => {
  const isEmpty = (value) => value.trim() === "";

  return (
    <StyledVenueNames>
      <StyledVenueTextfield
        label="Venue Name"
        name="venueName"
        value={venueDetails.venueName}
        onChange={handleVenueDetailChange}
        error={formSubmitted && isEmpty(venueDetails.venueName)}
        helperText={
          formSubmitted && isEmpty(venueDetails.venueName)
            ? "Venue Name is required"
            : ""
        }
      />
      <StyledVenueTextfield
        label="Address"
        name="address"
        value={venueDetails.address}
        onChange={handleVenueDetailChange}
        error={formSubmitted && isEmpty(venueDetails.address)}
        helperText={
          formSubmitted && isEmpty(venueDetails.address)
            ? "Address is required"
            : ""
        }
      />
      <StyledVenueTextfield
        label="City"
        name="city"
        value={venueDetails.city}
        onChange={handleVenueDetailChange}
        error={formSubmitted && isEmpty(venueDetails.city)}
        helperText={
          formSubmitted && isEmpty(venueDetails.city) ? "City is required" : ""
        }
      />
      <StyledVenueTextfield
        label="State"
        name="state"
        value={venueDetails.state}
        onChange={handleVenueDetailChange}
        error={formSubmitted && isEmpty(venueDetails.state)}
        helperText={
          formSubmitted && isEmpty(venueDetails.state)
            ? "State is required"
            : ""
        }
      />
      <StyledVenueTextfield
        label="Country"
        name="country"
        value={venueDetails.country}
        onChange={handleVenueDetailChange}
        error={formSubmitted && isEmpty(venueDetails.country)}
        helperText={
          formSubmitted && isEmpty(venueDetails.country)
            ? "Country is required"
            : ""
        }
      />
      <StyledVenueTextfield
        label="Zip Code"
        name="zipCode"
        value={venueDetails.zipCode}
        onChange={handleVenueDetailChange}
        error={formSubmitted && isEmpty(venueDetails.zipCode)}
        helperText={
          formSubmitted && isEmpty(venueDetails.zipCode)
            ? "Zip Code is required"
            : ""
        }
      />
    </StyledVenueNames>
  );
};

VenueDetails.propTypes = {
  venueDetails: PropTypes.object.isRequired,
  handleVenueDetailChange: PropTypes.func.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

export default VenueDetails;
