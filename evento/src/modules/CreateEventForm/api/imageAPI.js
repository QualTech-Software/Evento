import axios from "axios";

export const imageApi = async ({ file, eventData }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    // Append additional data to FormData
    for (const key in eventData) {
      formData.append(key, eventData[key]);
    }

    // Make the API call to upload the image
    const response = await axios.post(
      "http://localhost:3000/api/event-files",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Assuming your backend returns the file path after successful upload
    return response.data.filePath;
  } catch (error) {
    throw new Error("Failed to upload image: " + error.message);
  }
};
