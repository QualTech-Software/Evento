import React from "react";
import { Typography, formControlClasses } from "@mui/material";
import "../components/Categories.css";
import {
  fun,
  sports,
  traditional,
  travel,
  education,
  business,
} from "../../../assets";

export default function Categories() {
  return (
    <div className="qt-categories">
      <Typography variant="h1">Explore Categories</Typography>
      <div className="qt-categories-cards">
        <div className="qt-card-fun">
          <Typography variant="h6">Fun</Typography>
          <img src={fun} className="qt-fun-png" alt="Fun" />
        </div>

        <div className="qt-card-sports">
          <Typography variant="h6">Sports</Typography>
          <img src={sports} className="qt-sports-png" alt="Sports" />
        </div>

        <div className="qt-card-traditional">
          <Typography variant="h6">Traditional</Typography>
          <img
            src={traditional}
            className="qt-traditional-png"
            alt="Traditional"
          />
        </div>

        <div className="qt-card-travel">
          <Typography variant="h6">Travel</Typography>
          <img src={travel} className="qt-travel-png" alt="Travel" />
        </div>

        <div className="qt-card-education">
          <Typography variant="h6">Education</Typography>
          <img src={education} className="qt-education-png" alt="Education" />
        </div>

        <div className="qt-card-bussiness">
          <Typography variant="h6">Business</Typography>
          <img src={business} className="qt-bussiness-png" alt="Business" />
        </div>
      </div>
    </div>
  );
}
