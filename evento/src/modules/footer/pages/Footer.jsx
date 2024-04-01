import React, { useState } from "react";
import { googleplay, ios } from "../../../../public/assets/index.js";

import {
  StyledFooter,
  StyledLinkEvento,
  StyledLinkCategories,
  StyledLinkHelp,
  StyledLinkFollow,
  StyledLinkApp,
  StyledButton,
  StyledBottom,
  StyledMain,
  StyledLink,
} from "../components/atom";
const FooterContainer = () => {
  return (
    <>
      <StyledMain>
        <StyledFooter>
          <StyledLinkEvento>
            <h3>Evento</h3>
            <StyledLink href="#">About Us</StyledLink>
            <StyledLink href="#">Create Event</StyledLink>
            <StyledLink href="#">Interest</StyledLink>
            <StyledLink href="#">FAQs</StyledLink>
            <StyledLink href="#">Terms of Service</StyledLink>
            <StyledLink href="#">Privacy Policy</StyledLink>
          </StyledLinkEvento>
          <StyledLinkCategories>
            <h3>Categories</h3>
            <StyledLink href="#">Fun</StyledLink>
            <StyledLink href="#">Sports</StyledLink>
            <StyledLink href="#">Travel</StyledLink>
            <StyledLink href="#">Traditional</StyledLink>
            <StyledLink href="#">Business</StyledLink>
            <StyledLink href="#">Education</StyledLink>
          </StyledLinkCategories>
          <StyledLinkHelp>
            <h3>Help</h3>
            <StyledLink href="#">Account Support</StyledLink>
            <StyledLink href="#">Listing Events</StyledLink>
            <StyledLink href="#">Event Ticketing</StyledLink>
            <StyledLink href="#">Ticket Purchase</StyledLink>
            <StyledLink href="#">Terms and Conditions</StyledLink>
          </StyledLinkHelp>
          <StyledLinkFollow>
            <h3>Follow Us</h3>
            <StyledLink href="#">Facebook</StyledLink>
            <StyledLink href="#">Instagram</StyledLink>
            <StyledLink href="#">Twitter</StyledLink>
            <StyledLink href="#">Youtube</StyledLink>
          </StyledLinkFollow>
          <StyledLinkApp>
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
          </StyledLinkApp>
        </StyledFooter>
        <hr />
        <StyledBottom>&#169;2024Evento. All rights reserved</StyledBottom>
      </StyledMain>
    </>
  );
};
export default FooterContainer;
