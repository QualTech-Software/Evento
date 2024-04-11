import React from "react";
import { Link } from "react-router-dom";
import { logo, dashboard, event, interest } from "../../../assets";
import {
  StyledNavbar,
  StyledSidebar,
  StyledCategory,
  StyledEvent,
  StyledInterest,
  StyledSignup,
  StyledEventoLogo,
} from "../../home/components/atoms";
import { StyledLink } from "../../home/components/atoms";

const Navbar = () => (
  <StyledNavbar className="qt-navbar">
    <StyledEventoLogo>
      <img src={logo} alt="Logo" />
    </StyledEventoLogo>
    <StyledSidebar className="sidebar">
      <StyledCategory className="category">
        <img src={dashboard} alt="Dashboard" />
        <p>Categories</p>
      </StyledCategory>
      <StyledLink to="/createeventform" className="home-createevent">
        <StyledEvent className="event">
          <img src={event} alt="Event" />
          <p>Create Event</p>
        </StyledEvent>
      </StyledLink>
      <StyledInterest className="interest">
        <img src={interest} alt="Interest" />
        <p>Interested</p>
      </StyledInterest>
      <StyledSignup className="signup">
        <button>
          <p>Sign up</p>
        </button>
      </StyledSignup>
    </StyledSidebar>
  </StyledNavbar>
);

export default Navbar;
