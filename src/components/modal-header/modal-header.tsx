import React from "react";

import { Typography } from "@mui/material";

import Logo from "../logo/logo.component";

interface ModalHeaderType {
  title: string;
  message?: string;
}

const ModalHeader: React.FC<ModalHeaderType> = function ModalHeader({
  title,
  message,
}) {
  return (
    <>
      <Logo sx={{ fontSize: "48px" }} />

      <Typography
        variant="h3"
        sx={{
          margin: "12px 0 0",
        }}
      >
        Dashboard Kit
      </Typography>

      <Typography
        variant="h2"
        className="log-in__title"
        sx={{
          margin: "32px 0 0",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        className="log-in__text"
        sx={{
          margin: "12px 0 0 0",
        }}
      >
        {message}
      </Typography>
    </>
  );
};

ModalHeader.defaultProps = {
  message: undefined,
};

export default ModalHeader;
