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
  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    transition: opacity 0.3s ease;
    z-index: 1;
    opacity: 0.5; /* Adjust the opacity as desired */
  }

  p {
    color: rgba(255, 255, 255, 1);

    width: 135px;
    height: 41px;
    margin-top: 80px;
    margin-left: 55px;
    text-transform: uppercase;

    font-family: Merienda;
    font-size: 32px;
    font-weight: 600;
    line-height: 43.58px;
    text-align: center;
  }

  button {
    width: 120px;
    height: 40px;
    margin-top: 233px;
    margin-left: 68px;
    background: rgba(255, 0, 0, 1);
    background-image: url("../../../public/assets/Arrow1.png");
    transition: background-position 0.3s ease; /* Added transition for smooth effect */

    background-repeat: no-repeat;
    position: relative;
    background-size: 16px 16px;
    background-position: 76px;
    border-radius: 20px;
    border: none;
  }
  &:hover button {
    background-position: 86px; /* Adjust the position as needed */
  }
  button p {
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
    border-bottom: none;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
  }
`;

const DestinationCard = ({ image, buttonText }) => (
  <StyledDest image={image}>
    <p>{buttonText}</p>
    <button>
      <p>Explore</p>
    </button>
  </StyledDest>
);

export default DestinationCard;