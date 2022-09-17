import React from "react";
import { Alert } from "@mui/material";

type TextType = {
  text: string;
};

const AlertMessage: React.FC<TextType> = function AlertMessage({ text }) {
  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      {text}
    </Alert>
  );
};

export default AlertMessage;
