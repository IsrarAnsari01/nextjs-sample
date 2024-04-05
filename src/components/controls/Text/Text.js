import React from "react";
import { Typography } from "@mui/material";

const Text = ({ children, variant = "body1", ...other }) => {
  return (
    <Typography variant={variant} {...other}>
      {children}
    </Typography>
  );
};

export default Text;
