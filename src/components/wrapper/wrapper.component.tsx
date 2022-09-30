import React from "react";

import { Box } from "@mui/material";

type WrapperType = {
  children: React.ReactNode[] | React.ReactNode;
};

const Wrapper: React.FC<WrapperType> = function Wrapper({ children }) {
  return <Box sx={{ margin: "128px 30px 30px" }}>{children}</Box>;
};

export default Wrapper;
