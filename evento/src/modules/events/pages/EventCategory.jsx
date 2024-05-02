import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCategoriesRequest } from "../../Home/redux/actions/categoriesActions";
import { useParams } from "react-router-dom";
import Navbar from "./CategoryNavbar";
import backbtn from "../../../../public/assets/Backbtn.png";
import Onlineevents from "./Events";
import Organizer from "../../Home/pages/Organizer";
import TopDestination from "../../Home/pages/TopDestination";
import Footer from "../../../modules/footer/pages/Footer";
import CreateEvent from "./CreateEvent";
import { Link } from "react-router-dom";
import {
  StyledFunEvent,
  StyledFunEventMain,
  StyledExploreCategory,
  ExploreText,
  StyledExploreCard,
  Explore,
  StyledEventText,
  StyledEventSubText,
  StyledHover,
} from "../components/atoms";
import FreeEvent from "./FreeEvent";

const EventCategory = ({ categories, loading, fetchCategories }) => {
  const { category_id: eventCategoryId } = useParams();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (
      eventCategoryId &&
      parseInt(eventCategoryId) >= 1 &&
      parseInt(eventCategoryId) <= 6
    ) {
      setCurrentCategoryIndex(parseInt(eventCategoryId) - 1);
    }
  }, [eventCategoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentCategory = categories[currentCategoryIndex];

  if (!currentCategory) {
    return <div>No category found</div>;
  }

  const filteredCategories = categories.filter(
    (category) => category.parent_category_id === parseInt(eventCategoryId)
  );

  return (
    <>
      <StyledFunEventMain className="fun-event-main">
        <Navbar />
        <StyledFunEvent
          style={{
            backgroundImage: `url(${currentCategory.hero_img})`,
          }}
        >
          <Link to="/">
            {" "}
            <img src={backbtn} />
          </Link>
          <StyledEventText>
            <p>{currentCategory.name} events</p>
          </StyledEventText>
          <StyledEventSubText>
            <p>
              Discover the best {currentCategory.name} events in your area and
              online
            </p>
          </StyledEventSubText>
        </StyledFunEvent>
        <StyledExploreCategory>
          <ExploreText>
            <p>Explore what’s popular within {currentCategory.name}</p>
          </ExploreText>
          {filteredCategories.slice(0, 5).map((category, index) => (
            <StyledExploreCard key={index}>
              <StyledHover>
                <Explore
                  style={{
                    backgroundImage: `url(${category.logo_img})`,
                  }}
                >
                  <p>{category.name}</p>
                </Explore>
              </StyledHover>
            </StyledExploreCard>
          ))}
        </StyledExploreCategory>
        <Onlineevents category_id={eventCategoryId} />
        <CreateEvent />
        <FreeEvent />
        <Organizer />
        <TopDestination />
        <Footer />
      </StyledFunEventMain>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
});

const mapDispatchToProps = {
  fetchCategories: fetchCategoriesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCategory);
