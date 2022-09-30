import React from "react";
import { Box, useTheme } from "@mui/material";

interface ModalType {
  children: React.ReactNode[] | React.ReactNode;
}

const Modal: React.FC<ModalType> = function Modal({ children }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        padding: "40px 32px",
        margin: "auto",

        minWidth: "280px",
        width: "380px",

        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: "8px",

        backgroundColor: `${theme.palette.background.default}`,
      }}
    >
      {children}
    </Box>
  );
};

export default Modal;
