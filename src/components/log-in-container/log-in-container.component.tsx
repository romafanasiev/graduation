import React, { ReactNode } from "react";
import { Container } from "@mui/material";

import ContainerStyles from "./log-in-container.styles";

interface LogInContainerType {
  children: ReactNode;
}

const LogInContainer: React.FC<LogInContainerType> = function LogInContainer({
  children,
}) {
  return (
    <Container sx={ContainerStyles} maxWidth={false}>
      {children}
    </Container>
  );
};

export default LogInContainer;
