import React, { useState } from "react";
import "../components/Organizer.css";
import icon from "../../../assets/Organizer.png";

export default function Organizer() {
  return (
    <>
      <div className="og-card-main">
        <p className="head">Organizers to follow</p>
        <div className="card-category-2">
          <ul>
            <li>
              <div className="img-card iCard-style1">
                <div className="card-content">
                  <div className="card-image">
                    <img src={icon} />
                  </div>
                  <div className="card-text">
                    <span className="card-title">Samarth Event</span>
                    <div className="card-des">
                      <p>
                        978
                        <br />
                        <span>Followers</span>
                      </p>
                      <p>
                        102
                        <br />
                        <span>Events</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button type="btn" className="card-button">
                  <a href="#">Follow</a>
                </button>
              </div>
            </li>
            <li>
              <div className="img-card iCard-style1">
                <div className="card-content">
                  <div className="card-image">
                    <img src={icon} />
                  </div>
                  <div className="card-text">
                    <span className="card-title">Samarth Event</span>
                    <div className="card-des">
                      <p>
                        978
                        <br />
                        <span>Followers</span>
                      </p>
                      <p>
                        102
                        <br />
                        <span>Events</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button type="btn" className="card-button">
                  <a href="#">Follow</a>
                </button>
              </div>
            </li>
            <li>
              <div className="img-card iCard-style1">
                <div className="card-content">
                  <div className="card-image">
                    <img src={icon} />
                  </div>
                  <div className="card-text">
                    <span className="card-title">Samarth Event</span>
                    <div className="card-des">
                      <p>
                        978
                        <br />
                        <span>Followers</span>
                      </p>
                      <p>
                        102
                        <br />
                        <span>Events</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button type="btn" className="card-button">
                  <a href="#">Follow</a>
                </button>
              </div>
            </li>
            <li>
              <div className="img-card iCard-style1">
                <div className="card-content">
                  <div className="card-image">
                    <img src={icon} />
                  </div>
                  <div className="card-text">
                    <span className="card-title">Samarth Event</span>
                    <div className="card-des">
                      <p>
                        978
                        <br />
                        <span>Followers</span>
                      </p>
                      <p>
                        102
                        <br />
                        <span>Events</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button type="btn" className="card-button">
                  <a href="#">Follow</a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
