import React from "react";
import { googleplay, ios } from "../../../../public/assets/index.js";
import {
  StyledLinkEvento,
  StyledLinkCategories,
  StyledLinkHelp,
  StyledLinkFollow,
  StyledFooter,
  StyledLinkApp,
  StyledButton,
  StyledBottom,
  StyledMain,
  StyledLink,
} from "../components/atom";
import FooterData from "../data/Footer.json";

const FooterContainer = () => {
  const { links } = FooterData;
  const componentsMap = {
    StyledLinkEvento,
    StyledLinkCategories,
    StyledLinkHelp,
    StyledLinkFollow,
  };
  return (
    <StyledMain>
      <StyledFooter>
        {Object.values(links).map((linkMenu) => {
          var Component = componentsMap["StyledLink" + linkMenu.component];
          return (
            <Component>
              <h3>{linkMenu.title}</h3>
              {linkMenu.items.map((item, index) => (
                <StyledLink key={index} href={item.url}>
                  {item.label}
                </StyledLink>
              ))}
            </Component>
          );
        })}
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
      <StyledBottom>&#169;2024 Evento. All rights reserved</StyledBottom>
    </StyledMain>
  );
};

export default FooterContainer;
