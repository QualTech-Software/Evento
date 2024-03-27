import React from "react";
import "../modules/WelcomeEvent/components/WelcomeEvent.css";
import { sign_1, ellipse, ellipse_2, ellipse_3 } from "../icons";

import {
  StyledQtCardsContainer,
  StyledQtWelcome,
  StyledQtWrapper,
  StyledQtCard,
  StyledQtButton,
  StyledLink,
} from "../modules/WelcomeEvent/components/atom";

const WelcomeEvent = () => {
  return (
    <StyledQtCardsContainer className="qt-cards-container">
      <StyledQtWelcome>
        <h1>
          Welcome to Evento !<img src={sign_1} className="qt-sign" />
        </h1>
        <p>We’re glad you’ re here! What can we help you with first? </p>
      </StyledQtWelcome>
      <StyledQtWrapper>
        <StyledQtCard>
          <img src={ellipse} />
          <h3>Find an event</h3>
          <StyledLink to="/home">
            <StyledQtButton>
              <p>Tell us what you love</p>
            </StyledQtButton>
          </StyledLink>
        </StyledQtCard>
        <StyledQtCard>
          <img src={ellipse_2} />
          <h3>Organize an event</h3>
          <StyledLink to="/home">
            <StyledQtButton>
              <p>Organize your best event ever</p>
            </StyledQtButton>
          </StyledLink>
        </StyledQtCard>
        <StyledQtCard>
          <img src={ellipse_3} />
          <h3>Manage an event</h3>
          <StyledLink to="/home">
            <StyledQtButton>
              <p>Manage your best event ever</p>
            </StyledQtButton>
          </StyledLink>
        </StyledQtCard>
        {/* <div className="qt-card">
          <img src={ellipse_2} className="qt-ellipse_2" />
          <h2>Organize an event</h2>
          <button className="qt-button_2">
            <p>Organize your best event ever</p>
          </button>
        </div> */}

        {/* <div className="qt-card">
          <img src={ellipse_3} className="qt-ellipse_3" />
          <h4>Manage an event</h4>
          <button className="qt-button_3">
            <p>Manage your best event ever</p>
          </button>
        </div> */}
      </StyledQtWrapper>
    </StyledQtCardsContainer>
  );
};

export default WelcomeEvent;
