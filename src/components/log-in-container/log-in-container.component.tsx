import React, { ReactNode } from "react";
import { Container, useTheme } from "@mui/material";

interface LogInContainerType {
  children: ReactNode;
}

const LogInContainer: React.FC<LogInContainerType> = function LogInContainer({
  children,
}) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        margin: 0,
        padding: "20px",

        minHeight: "100vh",

        backgroundColor: `${theme.palette.secondary.main}`,
      }}
      maxWidth={false}
    >
      {children}
    </Container>
  );
};

export default LogInContainer;
