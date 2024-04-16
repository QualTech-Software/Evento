import React from "react";
import {
  StyledMainContainer,
  StyledIconButton,
  StyledFirstContainer,
} from "../components/atoms.js";
import "../components/carousel.css";
import EventCarousel from "./EventCarousel.jsx";
import { imghost, vector, iconShare } from "../../../assets/index.js";

const EventInformation = () => {
  return (
    <>
      <EventCarousel />
      <StyledMainContainer>
        <StyledFirstContainer>
          <div>
            <h1>Sound Of Christmas 2023</h1>
          </div>
          <StyledIconButton>
            <img src={vector} loading="lazy" alt="" />
            <img src={iconShare} loading="lazy" alt="" />
          </StyledIconButton>
        </StyledFirstContainer>
        <StyledFirstContainer>
          <div>
            <div> Date and Time</div>
            <p>Saturday, 2 December 2023</p>
            <p>6:30 PM - 9:30PM</p>
          </div>
          <div>
            <img src={iconShare} loading="lazy" alt="" />
          </div>
        </StyledFirstContainer>
        <h1>Location</h1>
        <z>
          Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road &
          Patwardhan Park,Off Linking Road, Bandra West., Mumbai, India
        </z>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9963070751296!2d72.83082507660014!3d19.063899982138224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9735b6a3c17%3A0x911ad335fd32a5b7!2sBal%20Gandharva%20Rang%20Mandir!5e0!3m2!1sen!2sin!4v1712209858732!5m2!1sen!2sin"
          width="730"
          height="250"
          loading="lazy"
        ></iframe>
        <h1>Hosted by</h1>
        <img src={imghost} alt="" />
        <p>City Youth Movement</p>
        <button>Contact</button>
        <button>Follow</button>
      </StyledMainContainer>
    </>
  );
};

export default EventInformation;
