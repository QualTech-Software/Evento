import React, { useState } from "react";
import "../Home/Home.css";
import {
  dashboard,
  event,
  interest,
  login,
  logo,
} from "../../../public/assets";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="qt-home">
        <div className="qt-navbar">
          <img src={logo} />
          <div className="sidebar">
            <div className="category">
              <img src={dashboard} alt="Dashboard" />
              <p>Categories</p>
            </div>
            <div className="event">
              <img src={event} alt="Event" />
              <p>Create Event</p>
            </div>
            <div className="interest">
              <img src={interest} alt="Interest" />
              <p>Interested</p>
            </div>
            <div className="login">
              <p>Log in</p>
              <img src={login} alt="Login" />
            </div>
            <div className="signup">
              <button>
                <p>Sign up</p>
                {/* <img src={signup} alt="Signup" /> */}
              </button>
            </div>
          </div>
        </div>
        <div className="qt-homebar">
          <h3>
            Don’t miss out! Explore the <span>vibrant events</span> happening
            locally and globally.
          </h3>

          <div className="search-bar">
            <div className="input-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search Events, Categories, Location,..."
              />
              <div className="extra">
                <input
                  type="text"
                  className="extra-input"
                  placeholder="Mumbai"
                />
                <div className="dropdown-icon" onClick={toggleDropdown}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="grayColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
                {showDropdown && (
                  <div className="dropdown-list">
                    <ul>
                      <li>Detect Current Location</li>
                      <li>Online</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
