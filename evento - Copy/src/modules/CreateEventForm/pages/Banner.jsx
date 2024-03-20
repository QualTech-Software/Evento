import React, { useRef, useState } from "react";
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
} from "../components/atoms.js";
import { uploadimage } from "../../../icons";

export default function Banner() {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);

    // Check if total number of files exceeds 5
    if (selectedFiles.length + files.length > 5) {
      alert("You can only upload a maximum of 5 images.");
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

  const handleImageClick = (file) => {
    // Show the image
    window.open(URL.createObjectURL(file));
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
      </EventBanner>

      {selectedFiles.length > 0 && (
        <StyledUploadedImagesContainer>
          {selectedFiles.map((file, index) => (
            <Grid item key={index}>
              <Typography
                variant="body1"
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick(file)}
              >
                <Photo />
                &nbsp;{file.name}
              </Typography>
              <IconButton
                onClick={() => handleDeleteImage(index)}
                style={{ position: "relative" }}
              >
                <Close style={{ position: "absolute", top: 0, right: 0 }} />
              </IconButton>
            </Grid>
          ))}
        </StyledUploadedImagesContainer>
      )}
    </>
  );
}
