import React from "react";
import { Typography } from "@mui/material";
import "../components/Categories.css";
import {
  fun,
  sports,
  traditional,
  travel,
  education,
  business,
} from "../../../assets";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    // Navigate to the EventCategory component with the corresponding ID
    navigate(`/category/event/${id}`);
  };

  return (
    <div className="qt-categories">
      <Typography variant="h1">Explore Categories</Typography>
      <div className="qt-categories-cards">
        <div onClick={() => handleCategoryClick(1)} className="qt-card-fun">
          <Typography variant="h6">Fun</Typography>
          <img src={fun} className="qt-fun-png" alt="Fun" />
        </div>

        <div onClick={() => handleCategoryClick(2)} className="qt-card-sports">
          <Typography variant="h6">Sports</Typography>
          <img src={sports} className="qt-sports-png" alt="Sports" />
        </div>

        <div
          onClick={() => handleCategoryClick(3)}
          className="qt-card-traditional"
        >
          <Typography variant="h6">Traditional</Typography>
          <img
            src={traditional}
            className="qt-traditional-png"
            alt="Traditional"
          />
        </div>

        <div onClick={() => handleCategoryClick(3)} className="qt-card-travel">
          <Typography variant="h6">Travel</Typography>
          <img src={travel} className="qt-travel-png" alt="Travel" />
        </div>

        <div
          onClick={() => handleCategoryClick(4)}
          className="qt-card-education"
        >
          <Typography variant="h6">Education</Typography>
          <img src={education} className="qt-education-png" alt="Education" />
        </div>

        <div
          onClick={() => handleCategoryClick(5)}
          className="qt-card-bussiness"
        >
          <Typography variant="h6">Business</Typography>
          <img src={business} className="qt-bussiness-png" alt="Travel" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
