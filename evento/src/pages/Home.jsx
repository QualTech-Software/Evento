import React, { useState } from "react";
import "../Components/Home/Home.css";
// import { Link, NavLink } from "react-router-dom";
// import { event, interest, logo } from "../assets";
//import { useNavigate } from "react-router-dom";
//import { dashboard, event, interest, login, logo } from "../assets";
import Categories from "../modules/home/pages/Categories";
import Events from "../modules/home/pages/Events";
import DiscoverEvent from "../modules/home/pages/DiscoverEvent";
import Organizer from "../modules/home/pages/Organizer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { dashboard, event, interest, logo, login } from "../assets";
import chevron from "../../public/assets/Chevron.png";
import CreateEvent from "../modules/home/pages/CreateEvent";
import TopDestination from "../modules/home/pages/TopDestination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Onlineevents from "../modules/home/pages/Events";
import BestEvent from "../modules/home/pages/DiscoverEvent";

import {
  StyledQtHome,
  StyledNavbar,
  StyledSidebar,
  StyledCategory,
  StyledEvent,
  StyledInterest,
  StyledQtLogin,
  StyledSignup,
  StyledHomebar,
  SearchBar,
  StyledInputCont,
  DropDown,
  StyledLink,
  MenuItemStyle,
  MenuItemStyleOl,
  TrendingSearch,
  EventGroup,
  StyledFirstInput,
  StyledSecondInput,
  StyledDropDownTrending,
  DropdownIconWrapper,
  IconButtonStyle,
  StyledEventoLogo,
} from "../modules/home/components/atoms";

const home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(""); // State to manage selected location
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [showTrendingSearch, setShowTrendingSearch] = useState(false); // State to manage trending search visibility
  const [searchInputValue, setSearchInputValue] = useState();

  const handleClick = () => {
    navigate("/create");
  };
  const handleoClick = () => {
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleTrendingSearch = () => {
    setShowTrendingSearch(!showTrendingSearch);
  };

  return (
    <>
      <StyledQtHome className="qt-home">
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
            <StyledLink to="/login">
              <StyledQtLogin>
                <p>Log in</p>
              </StyledQtLogin>
            </StyledLink>
            <StyledSignup className="signup">
              <button onClick={handleClick}>
                <p>Sign up</p>
              </button>
            </StyledSignup>
          </StyledSidebar>
        </StyledNavbar>
        <StyledHomebar className="qt-homebar">
          <h3>
            Don’t miss out! Explore the <span>vibrant events</span> happening
            locally and globally.
          </h3>

          <StyledInputCont className="input-container">
            <StyledFirstInput>
              <input
                type="text"
                className="search-input"
                placeholder="Search Events, Categories, Location,..."
                onClick={toggleTrendingSearch}
                value={searchInputValue} // Bind input value to searchInputValue state
                onChange={(e) => setSearchInputValue(e.target.value)}
                style={{
                  borderBottomLeftRadius: showTrendingSearch ? "0" : "10px",
                }}
              />
              <StyledDropDownTrending className="Dropdown-trending">
                {showTrendingSearch && (
                  <TrendingSearch className="trending-search">
                    <p>Trending Topics</p>
                    <EventGroup className="events-group">
                      <button
                        onClick={() => handleButtonClicked("Exhibitions")}
                      >
                        Exhibitions
                      </button>
                      <button onClick={() => handleButtonClicked("Art")}>
                        Art
                      </button>
                      <button onClick={() => handleButtonClicked("Workshop")}>
                        Workshop
                      </button>
                      <button onClick={() => handleButtonClicked("Business")}>
                        Business
                      </button>
                      <button onClick={() => handleButtonClicked("Training")}>
                        Training
                      </button>
                      <button onClick={() => handleButtonClicked("Festival")}>
                        Festival
                      </button>
                      <button onClick={() => handleButtonClicked("Adventures")}>
                        Adventures
                      </button>
                      <button onClick={() => handleButtonClicked("Kids")}>
                        Kids
                      </button>
                      <button onClick={() => handleButtonClicked("Music")}>
                        Music
                      </button>
                      <button
                        onClick={() => handleButtonClicked("Entertainment")}
                      >
                        Entertainment
                      </button>
                    </EventGroup>
                  </TrendingSearch>
                )}
              </StyledDropDownTrending>
            </StyledFirstInput>
            <StyledSecondInput className="second-input">
              <input
                type="text"
                className="extra-input"
                placeholder="Mumbai"
                style={{
                  borderBottomRightRadius: showDropdown ? "0" : "10px",
                }}
              />

              <DropdownIconWrapper onClick={toggleDropdown}>
                {" "}
                {/* Wrapper for dropdown icon */}
                <IconButtonStyle>
                  <ArrowDropDownIcon />
                </IconButtonStyle>
              </DropdownIconWrapper>
              {showDropdown && (
                <DropDown className="dropdown-menu">
                  <MenuItemStyle className="location">
                    <p>Detect Current Location</p>
                  </MenuItemStyle>
                  <MenuItemStyleOl className="world">
                    <p>Online</p>
                  </MenuItemStyleOl>
                </DropDown>
              )}
            </StyledSecondInput>
          </StyledInputCont>
        </StyledHomebar>
        <Categories />
        <Onlineevents />
        <BestEvent />
        <Organizer />
        <CreateEvent />
        <TopDestination />
      </StyledQtHome>
    </>
  );
};
export default home;
