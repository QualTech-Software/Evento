import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { StyledDialogbox } from "../components/atoms";

export default function DialogPopup({
  dialogOpen,
  setDialogOpen,
  dialogMessage,
}) {
  return (
    <StyledDialogbox open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>Message</DialogTitle>
      <DialogContent>
        <Typography>{dialogMessage}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)}>Close</Button>
      </DialogActions>
    </StyledDialogbox>
  );
}
