import React, { useState } from "react";
import { googleplay, ios } from "../../../../public/assets/index.js";

import {
  StyledFooter,
  StyledlinkEvento,
  StyledlinkCategories,
  StyledlinkHelp,
  StyledlinkFollow,
  StyledlinkApp,
  StyledButton,
  StyledBottom,
  StyledMain,
} from "../components/atom";
const Footercontainer = () => {
  return (
    <>
      <StyledMain>
        <StyledFooter>
          <StyledlinkEvento>
            <h3>Evento</h3>
            <a href="#" className="aStyles">
              About Us
            </a>
            <a href="#" className="aStyles">
              Create Event
            </a>
            <a href="#" className="aStyles">
              Interest
            </a>
            <a href="#" className="aStyles">
              FAQs
            </a>
            <a href="#" className="aStyles">
              Terms of Service
            </a>
            <a href="#" className="aStyles">
              Privacy Policy
            </a>
          </StyledlinkEvento>
          <StyledlinkCategories>
            <h3>Categories</h3>
            <a href="#" className="aStyles">
              Fun
            </a>
            <a href="#" className="aStyles">
              Sports
            </a>
            <a href="#" className="aStyles">
              Travel
            </a>
            <a href="#" className="aStyles">
              Traditional
            </a>
            <a href="#" className="aStyles">
              Business
            </a>
            <a href="#" className="aStyles">
              Education
            </a>
          </StyledlinkCategories>
          <StyledlinkHelp>
            <h3>Help</h3>
            <a href="#" className="aStyles">
              Account Support
            </a>
            <a href="#" className="aStyles">
              Listing Events
            </a>
            <a href="#" className="aStyles">
              Event Ticketing
            </a>
            <a href="#" className="aStyles">
              Ticket Purchase
            </a>
            <a href="#" className="aStyles">
              Terms and Conditions
            </a>
          </StyledlinkHelp>
          <StyledlinkFollow>
            <h3>Follow Us</h3>
            <a href="#" className="aStyles">
              Facebook
            </a>
            <a href="#" className="aStyles">
              Instagram
            </a>
            <a href="#" className="aStyles">
              Twitter
            </a>
            <a href="#" className="aStyles">
              Youtube
            </a>
          </StyledlinkFollow>
          <StyledlinkApp>
            <h3>Download The App</h3>
            <StyledButton
              variant="contained"
              color="secondary"
              className="googleplay"
            >
              <img src={googleplay} loading="lazy" alt="" />
              <p>
                Get it on
                <br />
                <span>Google Play</span>
              </p>
            </StyledButton>
            <StyledButton variant="contained" color="secondary">
              <img src={ios} loading="lazy" alt="" />
              <p>
                Download on the
                <br />
                <span>App Store</span>
              </p>
            </StyledButton>
          </StyledlinkApp>
        </StyledFooter>
        <hr />
        <StyledBottom>&#169;2024Evento. All rights reserved</StyledBottom>
      </StyledMain>
    </>
  );
};
export default Footercontainer;
