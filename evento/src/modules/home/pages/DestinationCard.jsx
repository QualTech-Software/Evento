import React from "react";
import styled from "styled-components";

const StyledDest = styled.div`
  width: 292px;
  margin: 20px;
  height: 447px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  position: relative;
  background-size: 292px 447px;
  border-radius: 8px;
  p {
    color: rgba(30, 10, 60, 1);
    width: 135px;
    height: 41px;
    margin-top: 20px;
    margin-left: 69px;
    text-transform: uppercase;
    text-decoration: underline;
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 43.58px;
    text-align: left;
  }
  button {
    width: 120px;
    height: 40px;
    margin-top: 300px;
    margin-left: 68px;
    background: rgba(255, 0, 0, 1);
    background-image: url("../../../public/assets/Arrow1.png");
    transition: background-position 0.3s ease; /* Added transition for smooth effect */

    &:hover {
      background-position: 86px; /* Adjusted background position on hover */
    }
    background-repeat: no-repeat;
    position: relative;
    background-size: 16px 16px;
    background-position: 76px;
    border-radius: 20px;
    p {
      width: 58px;
      height: 22px;
      margin-top: 6px;
      margin-left: 10px;
      gap: 0px;
      opacity: 0px;
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 21.79px;
      text-align: left;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      text-transform: capitalize;
    }
  }
`;

const DestinationCard = ({ image, buttonText }) => {
  return (
    <StyledDest image={image}>
      <p>{buttonText}</p>
      <button>
        <p>Explore</p>
      </button>
    </StyledDest>
  );
};

export default DestinationCard;
