import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "../components/Categories.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      let allCategories = [];

      for (let i = 1; i <= 6; i++) {
        const response = await axios.get(
          `http://localhost:3000/api/categories/${i}`
        );
        const data = response.data;
        if (data.success && data.categories.length > 0) {
          allCategories = [...allCategories, ...data.categories];
        } else {
          console.log(`No data found for category ID ${i}`);
        }
      }

      // Filter categories with category_id from 1 to 6
      const filteredCategories = allCategories.filter(
        (category) => category.category_id >= 1 && category.category_id <= 6
      );

      // Update state with the filtered categories
      setCategories(filteredCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/category/event/${id}`);
  };

  return (
    <div className="qt-categories">
      <Typography variant="h1">Explore Categories</Typography>
      <div className="qt-categories-cards">
        {categories.map((category) => (
          <div
            key={category.category_id}
            onClick={() => handleCategoryClick(category.category_id)}
            className={`qt-card-${category.name.toLowerCase()}`}
          >
            <Typography variant="h6">{category.name}</Typography>
            <img src={category.logo_img} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
