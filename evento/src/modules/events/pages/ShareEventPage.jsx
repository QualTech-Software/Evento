import React, { useEffect } from "react";
import {
  StyledSharedMainContainer,
  StyledPopupContainer,
  Styledheader,
  StyledContent,
  StyledUnorderedList,
  StyledTextContainer,
} from "../components/atoms";
import "../components/shareevent.css";
import initializeShareEvent from "../components/Shareevent";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ShareEvent = () => {
  useEffect(() => {
    initializeShareEvent(); // Call the function to initialize share event functionality
  }, []);

  return (
    <StyledSharedMainContainer>
      <StyledPopupContainer className="popup">
        <Styledheader>
          <span>Share with friends</span>
          <div className="close">
            <IoMdClose />
          </div>
        </Styledheader>

        <StyledContent className="content">
          <StyledUnorderedList className="icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <RiWhatsappFill />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </StyledUnorderedList>

          <StyledTextContainer className="field">
            <p>Event URL</p>
            <input
              type="text"
              readOnly
              value="https://codepen.io/coding_dev_"
            />
            <button>Copy</button>
          </StyledTextContainer>
        </StyledContent>
      </StyledPopupContainer>
      <button className="view-modal">Share</button>
    </StyledSharedMainContainer>
  );
};

export default ShareEvent;
