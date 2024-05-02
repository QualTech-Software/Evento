import React from "react";
import { Tickets } from "../../Home/components/atoms.js";
import { ticket, ellipse, star } from "../../../assets/index.js";

const TicketSection = () => (
  <Tickets className="tickets" orientation="horizontal">
    <div className="price">
      <img src={ticket} alt="Ticket Icon" />
      INR 1,400
    </div>
    <div className="ellipse">
      <img src={ellipse} alt="Ellipse Icon" />
    </div>
    <div className="interested">
      <img src={star} alt="Star Icon" />
      14 interested
    </div>
  </Tickets>
);

export default TicketSection;
