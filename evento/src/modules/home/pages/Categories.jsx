import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../components/Categories.css";
import { connect } from "react-redux";
import { fetchCategoriesRequest } from "../redux/actions/categoriesActions";
import { useNavigate } from "react-router-dom";
import { event } from "../../../assets";

const Categories = ({ categories, loading, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const { category_id } = category;
    navigate(`/category/event/${category_id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredCategories = categories.filter(
    (category) => category.parent_category_id === 0
  );

  return (
    <div className="qt-categories">
      <Typography variant="h1">Explore Categories</Typography>
      <div className="qt-categories-cards">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className={`qt-card-${category.name.toLowerCase()}`}
            onClick={() => handleCategoryClick(category)}
          >
            <Typography variant="h6">{category.name}</Typography>
            <img
              src={category.logo_img}
              alt={category.name}
              className={`qt-${category.name.toLowerCase()}-png`}
            />
          </div>
        ))}
      </div>
    </div>
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
