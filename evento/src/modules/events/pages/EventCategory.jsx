import React, { useState, useEffect } from "react";
import BackBtn from "../../../../public/assets/Backbtn.png";
import Navbar from "./CategoryNavbar";
import {
  StyledFunEvent,
  StyledFunEventMain,
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
import Orgnizer from "../../Home/pages/Organizer";
import TopDestination from "../../Home/pages/TopDestination";
import CreateEvent from "./CreateEvent";
import Onlineevents from "../../home/pages/Events";
import CreateEvent from "../../home/pages/CreateEvent";
import Orgnizer from "../../home/pages/Organizer";
import TopDestination from "../../home/pages/TopDestination";
const EventCategory = () => {
  const { id } = useParams();
  const eventId = parseInt(id);
  const [eventDataItem, setEventDataItem] = useState(null);
  useEffect(() => {
    if (eventId > 0) {
      setEventDataItem(eventData[eventId]);
    }
  }, [eventId]);

  if (!eventDataItem) {
    return <div>Event not found</div>;
  }
  const { text, location, subtext, backgroundImage } = eventDataItem;
  // Extract exploreText from the first item in exploreData
  const exploreText = exploreData.exploreData[0].exploreText;
  // Calculate the start and end index for rendering
  const startIdx = (eventId - 1) * 5;
  const endIdx = startIdx + 5;
  const visibleExploreData = exploreData.exploreData.slice(startIdx, endIdx);
  return (
    <>
      <StyledFunEventMain className="fun-event-main">
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
      </StyledFunEventMain>
    </>
  );
};

export default EventCategory;
