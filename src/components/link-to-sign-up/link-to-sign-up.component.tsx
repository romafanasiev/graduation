import React from "react";

import { Box, Typography, Link } from "@mui/material";

const LinkSignUp: React.FC = function LogInPage() {
  return (
    <Box sx={{ display: "flex", gap: "5px" }}>
      <Typography variant="body1">Don’t have an account?</Typography>
      <Link href="/sign_up">Sign up</Link>
    </Box>
  );
};

export default LinkSignUp;
