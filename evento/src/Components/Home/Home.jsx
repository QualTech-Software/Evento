import React from "react";
import "../Home/Home.css";
import dashboard from "../../assets/dashboard.png";
import event from "../../assets/createevent.png";
import interest from "../../assets/favorite.png";
import login from "../../assets/login.png";
import signup from "../../assets/signup.png";
const Home = () => {
  return (
    <>
      <div className="qt-home">
        <div className="qt-navbar">
          <div className="sidebar">
            <div className="category">
              <img src={dashboard} />
              <p>Categories</p>
            </div>
            <div className="event">
              <img src={event} />
              <p>Create Event</p>
            </div>
            <div className="interest">
              <img src={interest} />
              <p>Interested</p>
            </div>
            <div className="login">
              <p>Log in</p>
              <img src={login} />
            </div>
            <div className="signup">
              <button>
                <p>Sign up</p>
                <img src={signup} />
              </button>
            </div>
          </div>
        </div>
        <div className="qt-homebar">
          <div className="content">
            <p>
              Don’t miss out! Explore the <span> vibrant events</span> happening
              locally and globally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
