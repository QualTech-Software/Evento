import React, { useEffect } from "react";
import {
  StyledSharedMainContainer,
  StyledUnorderedList,
  StyledTextContainer,
  StyledTypography,
} from "../components/atoms";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShareEvent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledSharedMainContainer>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <StyledTypography id="transition-modal-title">
              Share with friends
            </StyledTypography>
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
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {" "}
              <StyledTextContainer className="field">
                <p>Event URL</p>
                <input
                  type="text"
                  readOnly
                  value="https://codepen.io/coding_dev_"
                />
                <button>Copy</button>
              </StyledTextContainer>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </StyledSharedMainContainer>
  );
}
