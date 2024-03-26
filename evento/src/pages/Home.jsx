import React, { useState } from "react";
import "../Components/Home/Home.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { dashboard, event, interest, logo } from "../assets";
import chevron from "../../public/assets/Chevron.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Organizer from "../modules/Home/pages/Organizer";
import Categories from "../modules/Home/pages/Categories";
import Onlineevents from "../modules/Home/pages/Events";
import BestEvent from "../modules/Home/pages/DiscoverEvent";
import {
  QtHome,
  Navbar,
  Sidebar,
  Category,
  Event,
  Interest,
  QtLogin,
  Signup,
  Homebar,
  SearchBar,
  InputCont,
  DropDown,
  StyledLink,
} from "../modules/Home/components/atoms";

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(""); // State to manage selected location
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const handleClick = () => {
    navigate("/create");
  };
  const handleoClick = () => {
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <QtHome className="qt-home">
        <Navbar className="qt-navbar">
          <img src={logo} alt="Logo" />
          <Sidebar className="sidebar">
            <Category className="category">
              <img src={dashboard} alt="Dashboard" />
              <p>Categories</p>
            </Category>
            <Event className="event">
              <img src={event} alt="Event" />
              <p>Create Event</p>
            </Event>
            <Interest className="interest">
              <img src={interest} alt="Interest" />
              <p>Interested</p>
            </Interest>
            <StyledLink to="/login">
              <QtLogin>
                <p>Log in</p>
              </QtLogin>
            </StyledLink>
            <Signup className="signup">
              <button onClick={handleClick}>
                <p>Sign up</p>
              </button>
            </Signup>
          </Sidebar>
        </Navbar>
        <Homebar className="qt-homebar">
          <h3>
            Don’t miss out! Explore the <span>vibrant events</span> happening
            locally and globally.
          </h3>
          <SearchBar className="search-bar">
            <InputCont className="input-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search Events, Categories, Location,..."
              />

              <input
                type="text"
                className="extra-input"
                placeholder="Mumbai"
                style={{
                  borderBottomRightRadius: showDropdown ? "0" : "10px", // Adjust border-radius based on dropdown visibility
                }}
              />

              <img
                src={chevron}
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "31px",
                  marginLeft: "-50px",
                }}
                onClick={toggleDropdown}
              />

              {showDropdown && (
                <DropDown className="dropdown-menu">
                  <MenuItem>Detect Current Location</MenuItem>
                  <MenuItem>Online</MenuItem>
                </DropDown>
              )}
            </InputCont>
          </SearchBar>
        </Homebar>
        <Categories />
        <Onlineevents />
        <BestEvent />
        <Organizer />
      </QtHome>
    </>
  );
};

export default Home;
