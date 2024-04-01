import React, { useState } from "react";
import BackBtn from "../../../../public/assets/Backbtn.png";
import Navbar from "./Navbar";
import {
  StyledFunEvent,
  FunEventMain,
  StyledEventText,
  StyledEventLocation,
  StyledEventSubText,
  StyledExploreCategory,
  ExploreText,
  StyledExploreCard,
  Explore,
} from "../components/atoms";
import eventData from "../components/Event.json";
import exploreData from "../components/ExploreData.json";
import { useParams } from "react-router-dom";

import Onlineevents from "../../Home/pages/Events";
import CreateEvent from "../../Home/pages/CreateEvent";
import Orgnizer from "../../Home/pages/Organizer";
import TopDestination from "../../Home/pages/TopDestination";

const EventCategory = () => {
  const { id } = useParams();
  const eventId = parseInt(id);

  if (!eventData[eventId]) {
    return <div>Event not found</div>;
  }

  const { text, location, subtext, backgroundImage } = eventData[eventId];

  // Extract exploreText from the first item in exploreData
  const exploreText = exploreData.exploreData[0].exploreText;

  // Calculate the start and end index for rendering
  const startIdx = (eventId - 1) * 5;
  const endIdx = startIdx + 5;
  const visibleExploreData = exploreData.exploreData.slice(startIdx, endIdx);

  return (
    <>
      <FunEventMain className="fun-event-main">
        <Navbar />
        <StyledFunEvent style={{ backgroundImage: `url(${backgroundImage})` }}>
          <img src={BackBtn} />
          <StyledEventText>
            <p>{text}</p>
          </StyledEventText>
          <StyledEventLocation>
            <p>{location}</p>
          </StyledEventLocation>
          <StyledEventSubText>
            <p>{subtext}</p>
          </StyledEventSubText>
        </StyledFunEvent>
        <StyledExploreCategory>
          <ExploreText>
            <p>{exploreText}</p>
          </ExploreText>
          {visibleExploreData.map((exploreItem, index) => (
            <StyledExploreCard key={index}>
              <Explore
                style={{
                  backgroundImage: `url(${exploreItem.backgroundImage})`,
                }}
              >
                <p>{exploreItem.explorePText}</p>
              </Explore>
            </StyledExploreCard>
          ))}
        </StyledExploreCategory>
        <Onlineevents />
        <CreateEvent />
        <Orgnizer />
        <TopDestination />
      </FunEventMain>
    </>
  );
};

export default EventCategory;
