import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uploadImagesRequest } from "../Redux/actions/imageActions.js";
import { imageApi } from "../api/imageAPI.js"; // Import imageApi
import { Grid, IconButton, Card, Modal, Backdrop } from "@mui/material";
import { Close } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import {
  EventBanner,
  BannerHeading,
  BannerTitle,
  BannerDescription,
  StyledBannerUpload,
  StyledBannerBrowse,
  Styleduploadimage,
  StyledBrowseP,
  StyledUploadedImagesContainer,
  StyledBrowseButton,
  StyledBrowseButtonText,
  StyledEventButton,
  StyledEventButtonP,
  Styleduploadline,
  StyledLine,
  StyledBannerP,
  StyledCardMedia,
  StyledImgFade,
} from "../components/atoms.js";
import { uploadimage, line } from "../../../icons";

const StyledSlider = styled(Slider)`
  position: relative;
  border: 2px solid black;
  margin-top: 30%;
  .slick-next {
    right: 10px;
    z-index: 1;
  }
  .slick-prev {
    left: 10px;
    z-index: 1;
  }
`;
const Banner = ({ setCurrentStep, isPaidEvent, selectedType }) => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Add useDispatch hook to dispatch actions

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);

    // Check if total number of files exceeds 4
    if (selectedFiles.length + files.length > 4) {
      alert("You can only upload a maximum of 4 images.");
      return;
    }

    // Update selected files state
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };

  const handleBrowseButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = (index) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file, i) => i !== index)
    );
  };

  const handleSave = async () => {
    if (selectedFiles.length === 0) {
      alert("Please upload images.");
      return;
    }
    const uploadedFilePaths = [];
    for (const file of selectedFiles) {
      try {
        const imagePath = await imageApi({
          file,
          eventData: {
            event_id: 7,
            filename: file.name,
            type: file.type,
            path: "/uploads", // Assuming the path where images are saved on the backend
            // Add any other data you want to send
          },
        });
        uploadedFilePaths.push(imagePath);
      } catch (error) {
        console.error("Failed to upload image:", error);
        alert("Failed to upload image. Please try again.");
        return;
      }
    }

    // Dispatch action to upload images
    dispatch(uploadImagesRequest(uploadedFilePaths))
      .then(() => {
        if (isPaidEvent) {
          setCurrentStep(2);
          navigate("/createeventform/ticketing", {
            state: { eventType: selectedType },
          });
        } else {
          setCurrentStep(3);
          navigate("/createeventform/review");
        }
      })
      .catch((error) => {
        console.error("Failed to save event:", error);
        alert("Failed to save event. Please try again.");
      });
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <EventBanner className="qt-event-banner">
        <BannerHeading className="qt-banner-heading">
          <BannerTitle>Upload Images</BannerTitle>
          <BannerDescription>
            Add your images here, and you can upload up to 4 files max
          </BannerDescription>
        </BannerHeading>
        <StyledBannerUpload className="qt-banner-upload">
          <Styleduploadimage
            src={uploadimage}
            className="qt-banner-uploadimage"
          />
          <StyledBannerBrowse className="qt-banner-browse">
            <StyledBrowseP>Upload your Images</StyledBrowseP>
            <StyledLine>
              <Styleduploadline src={line} className="qt-banner-line_1" />
              <p>OR</p>
              <Styleduploadline src={line} className="qt-banner-line_1" />
            </StyledLine>
            <StyledBrowseButton onClick={handleBrowseButtonClick}>
              <StyledBrowseButtonText>Browse Files</StyledBrowseButtonText>
            </StyledBrowseButton>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple
              onChange={handleFileInputChange}
            />
          </StyledBannerBrowse>
        </StyledBannerUpload>
        <StyledBannerP>Only support jpg and png images.</StyledBannerP>
      </EventBanner>

      {selectedFiles.length > 0 && (
        <StyledUploadedImagesContainer>
          {selectedFiles.map((file, index) => (
            <Grid item key={index} style={{ margin: "24px" }}>
              <Card
                style={{
                  width: "310px",
                  height: "310px",
                  position: "relative",
                }}
              >
                <StyledCardMedia
                  component="img"
                  image={URL.createObjectURL(file)}
                  alt={file.name}
                  onClick={() => handleImageClick(index)}
                />
                <IconButton
                  onClick={() => handleDeleteImage(index)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "rgba(217, 217, 217, 1)",
                  }}
                >
                  <Close />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </StyledUploadedImagesContainer>
      )}

      <StyledEventButton onClick={handleSave}>
        <StyledEventButtonP>Save & Continue</StyledEventButtonP>
      </StyledEventButton>

      {/* Popup for Selected Image */}
      <Modal
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="image-popup-modal"
        aria-describedby="image-popup-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <StyledImgFade in={openPopup}>
          <div>
            <StyledSlider initialSlide={selectedImageIndex}>
              {selectedFiles.map((file, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(file)} alt={file.name} />
                </div>
              ))}
            </StyledSlider>
          </div>
        </StyledImgFade>
      </Modal>
    </>
  );
};

export default Banner;
