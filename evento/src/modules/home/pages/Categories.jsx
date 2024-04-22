import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../components/Categories.css";
import {
  StyledCategories,
  StyledCatergoriesCard,
  Styledimage,
  StyledTypography,
  StyledCategoryCard,
} from "../components/atoms";
import { connect } from "react-redux";
import { fetchCategoriesRequest } from "../redux/actions/categoriesActions";
import { useNavigate } from "react-router-dom";
const Categories = ({ categories, loading, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  const navigate = useNavigate();
  const handleCategoryClick = (id) => {
    navigate(`/category/event/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledCategories>
      <Typography variant="h1">Explore Categories</Typography>
      <StyledCatergoriesCard>
        {categories.map((category) => (
          <StyledCategoryCard
            key={category.id}
            category={category}
            onClick={() => handleCategoryClick(category.id)}
          >
            <StyledTypography variant="h6">{category.name}</StyledTypography>
            <Styledimage
              src={category.logo_img}
              alt={category.name}
              className="qt-img"
            />
          </StyledCategoryCard>
        ))}
      </StyledCatergoriesCard>
    </StyledCategories>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
});

const mapDispatchToProps = {
  fetchCategories: fetchCategoriesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
