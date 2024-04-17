import React from "react";
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
import FooterData from "../data/Footer.json";

const FooterContainer = () => {
  const { links } = FooterData;

  return (
    <>
      <StyledMain>
        <StyledFooter>
          <StyledLinkEvento>
            <h3>{links.evento.title}</h3>
            {links.evento.items.map((item, index) => (
              <StyledLink key={index} href={item.url}>
                {item.label}
              </StyledLink>
            ))}
          </StyledLinkEvento>
          <StyledLinkCategories>
            <h3>{links.categories.title}</h3>
            {links.categories.items.map((item, index) => (
              <StyledLink key={index} href={item.url}>
                {item.label}
              </StyledLink>
            ))}
          </StyledLinkCategories>
          <StyledLinkHelp>
            <h3>{links.help.title}</h3>
            {links.help.items.map((item, index) => (
              <StyledLink key={index} href={item.url}>
                {item.label}
              </StyledLink>
            ))}
          </StyledLinkHelp>
          <StyledLinkFollow>
            <h3>{links.follow.title}</h3>
            {links.follow.items.map((item, index) => (
              <StyledLink key={index} href={item.url}>
                {item.label}
              </StyledLink>
            ))}
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
