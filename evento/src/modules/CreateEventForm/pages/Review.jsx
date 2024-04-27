import React, { useEffect, useRef } from "react";
import {
  StyledMainContainer,
  StyledSlickCarousel,
} from "../components/atoms.js";
// import "../components/carousel.css";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import { Event, Event1, Event2 } from "../../../assets/index.js";
import EventInformation from "../components/EventInfo.jsx";
import { StyledNavbar } from "../../Home/components/atoms.js";

const Review = () => {
  const slickRef = useRef(null);

  useEffect(() => {
    $(slickRef.current).slick({
      infinite: true,
      slidesToShow: 1, // Shows a three slides at a time
      slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
      arrows: true, // Adds arrows to sides of slider
      dots: true, // Adds the dots on the bottom
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3 seconds)
    });
  }, []);
  return (
    <>
      <StyledNavbar />
      <StyledMainContainer>
        <StyledSlickCarousel ref={slickRef}>
          <div>
            <img src={Event1} />
          </div>
          <div>
            <img src={Event} />
          </div>
          <div>
            <img src={Event2} />
          </div>
          <div>
            <img src={Event} />
          </div>
        </StyledSlickCarousel>
      </StyledMainContainer>
      <EventInformation />
    </>
  );
};

export default Review;
