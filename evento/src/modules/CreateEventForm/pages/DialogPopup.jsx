import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function DialogPopup({
  dialogOpen,
  setDialogOpen,
  dialogMessage,
}) {
  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>Message</DialogTitle>
      <DialogContent>
        <Typography>{dialogMessage}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
