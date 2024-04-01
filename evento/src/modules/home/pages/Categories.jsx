import React from "react";
import { Typography } from "@mui/material";
import "../components/Categories.css";
import { useNavigate } from "react-router-dom";
import CategoryData from "../components/CategoryData.json";
import {
  fun,
  sports,
  traditional,
  travel,
  education,
  business,
} from "../../../assets";

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
        {CategoryData.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`qt-card-${category.name.toLowerCase()}`}
          >
            <Typography variant="h6">{category.name}</Typography>
            <img
              src={getImage(category.name)}
              className={`qt-${category.name.toLowerCase()}-png`}
              alt={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get the image based on category name
const getImage = (categoryName) => {
  switch (categoryName.toLowerCase()) {
    case "fun":
      return fun;
    case "sports":
      return sports;
    case "traditional":
      return traditional;
    case "travel":
      return travel;
    case "education":
      return education;
    case "business":
      return business;
    default:
      return null;
  }
};

export default Categories;
