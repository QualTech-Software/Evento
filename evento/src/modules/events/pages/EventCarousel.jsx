import React from "react";
import { StyledMainContainer } from "../components/atoms.js";
import "../components/carousel.css";
const EventCarousel = () => {
  return (
    <StyledMainContainer className="mainContainer">
      <ul className="slides">
        <input type="radio" name="radio-buttons" id="img-1" />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-2" checked />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-3" />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-4" />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
          </div>
        </li>
        <div className="carousel-dots">
          <label
            htmlFor="img-1"
            className="carousel-dot"
            id="img-dot-1"
          ></label>
          <label
            htmlFor="img-2"
            className="carousel-dot"
            id="img-dot-2"
          ></label>
          <label
            htmlFor="img-3"
            className="carousel-dot"
            id="img-dot-3"
          ></label>
          <label
            htmlFor="img-4"
            className="carousel-dot"
            id="img-dot-4"
          ></label>
        </div>
      </ul>
    </StyledMainContainer>
  );
};

export default EventCarousel;
