import React, { useState } from "react";
import "../Components/Home/Home.css";
import { Link, NavLink } from "react-router-dom";
// import { event, interest, logo } from "../assets";
import { useNavigate } from "react-router-dom";
import { dashboard, event, interest, login, logo } from "../assets";
import Categories from "../modules/Home/pages/Categories";
import Events from "../modules/Home/pages/Events";
import DiscoverEvent from "../modules/Home/pages/DiscoverEvent";
import Organizer from "../modules/Home/pages/Organizer";
import chevron from "../../public/assets/Chevron.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
  MenuItemStyle,
  MenuItemStyleOl,
  TrendingSearch,
  EventGroup,
} from "../modules/Home/components/atoms";

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(""); // State to manage selected location
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [showTrendingSearch, setShowTrendingSearch] = useState(false); // State to manage trending search visibility

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
      <QtHome className="qt-home">
        <Navbar className="qt-navbar">
          <img src={logo} alt="Logo" />
          <Sidebar className="sidebar">
            <Category className="category">
              <img src={dashboard} alt="Dashboard" />
              <p>Categories</p>
            </Category>
            <StyledLink to="/createeventform" className="home-createevent">
              <Event className="event">
                <img src={event} alt="Event" />
                <p>Create Event</p>
              </Event>
            </StyledLink>
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

          <InputCont className="input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search Events, Categories, Location,..."
              onClick={toggleTrendingSearch}
              style={{
                borderBottomLeftRadius: showTrendingSearch ? "0" : "10px",
              }}
            />

            <input
              type="text"
              className="extra-input"
              placeholder="Mumbai"
              style={{
                borderBottomRightRadius: showDropdown ? "0" : "10px",
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
                <MenuItemStyle className="location">
                  <p>Detect Current Location</p>
                </MenuItemStyle>
                <MenuItemStyleOl className="world">
                  <p>Online</p>
                </MenuItemStyleOl>
              </DropDown>
            )}
            {showTrendingSearch && (
              <TrendingSearch className="trending-search">
                <p>Trending Topics</p>
                <EventGroup className="events-group">
                  <button>Exibitions</button>
                  <button>Art</button>
                  <button>Workshop</button>
                  <button>Business</button>
                  <button>Training</button>
                  <button>Festival</button>
                  <button>Adventures</button>
                  <button>Kids</button>
                  <button>Music</button>
                  <button>Entertainment</button>
                </EventGroup>
              </TrendingSearch>
            )}
          </InputCont>
        </Homebar>
        <Categories />
        <Onlineevents />
        <BestEvent />
        <Organizer />
      </QtHome>

      {/* <Categories />
      <Events />
      <DiscoverEvent />
      <Organizer /> */}
    </>
  );
};
export default Home;
