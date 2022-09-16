import React from "react";
import { Box } from "@mui/material";

import Modalstyles from "./modal.styles";

interface ModalType {
  children: React.ReactNode[];
}

const Modal: React.FC<ModalType> = function Modal({ children }) {
  return <Box sx={Modalstyles}>{children}</Box>;
};

export default Modal;
