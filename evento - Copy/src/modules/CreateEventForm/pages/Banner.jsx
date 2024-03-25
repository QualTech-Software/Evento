import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton, Typography, Card, CardMedia } from "@mui/material";
import { Close, Photo } from "@mui/icons-material"; // Import Close and Photo icons
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
} from "../components/atoms.js";
import { uploadimage, line } from "../../../icons";

export default function Banner({ setCurrentStep }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);

    // Check if total number of files exceeds 5
    if (selectedFiles.length + files.length > 4) {
      alert("You can only upload a maximum of 4 images.");
      return;
    }

    // Check file size and type for each file
    const validFiles = files.filter((file) => {
      const allowedTypes = ["image/png", "image/jpeg"];
      return file.size <= 5 * 1024 * 1024 && allowedTypes.includes(file.type); // 5MB and allowed types
    });

    // Update selected files state
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...validFiles,
    ]);
  };

  const handleBrowseButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = (index) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file, i) => i !== index)
    );
  };
  const handleSaveAndContinue = () => {
    setCurrentStep(2);
    navigate("/ticketing");
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
            <Grid item key={index}>
              <Card>
                <CardMedia
                  component="img"
                  image={URL.createObjectURL(file)}
                  alt={file.name}
                />
                <IconButton
                  onClick={() => handleDeleteImage(index)}
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  <Close />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </StyledUploadedImagesContainer>
      )}
      <StyledEventButton variant="contained" onClick={handleSaveAndContinue}>
        <StyledEventButtonP>Save & Continue</StyledEventButtonP>
      </StyledEventButton>
    </>
  );
}
