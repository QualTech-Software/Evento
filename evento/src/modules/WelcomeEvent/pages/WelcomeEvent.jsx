import React from "react";
import "../Styles/Welcomeevent.css";
import { sign_1, ellipse, ellipse_2, ellipse_3 } from "../assets";

const WelcomeEvent = () => {
  return (
    <div className="qt-cards-container">
      <div className="qt-welcome">
        <h1>
          Welcome to Evento !<img src={sign_1} className="qt-sign" />
        </h1>
        <p>We’re glad you’ re here! What can we help you with first? </p>
      </div>
      <div className="qt-wrapper">
        <div className="qt-card">
          <img src={ellipse} className="qt-ellipse" />
          <h3>Find an event</h3>
          <button className="qt-button_1">
            <p>Tell us what you love</p>
          </button>
        </div>

        <div className="qt-card">
          <img src={ellipse_2} className="qt-ellipse_2" />
          <h2>Organize an event</h2>
          <button className="qt-button_2">
            <p>Organize your best event ever</p>
          </button>
        </div>

        <div className="qt-card">
          <img src={ellipse_3} className="qt-ellipse_3" />
          <h4>Manage an event</h4>
          <button className="qt-button_3">
            <p>Manage your best event ever</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeEvent;
