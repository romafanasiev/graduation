import React from "react";
import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchField(): React.ReactElement {
  const theme = useTheme();
  return (
    <TextField
      variant="standard"
      sx={{
        margin: "0 0 0 20px",
        padding: "0 0 0 12px",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: theme.palette.background.default,
        },
      }}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ padding: 0 }}>
              <SearchIcon color="icons" sx={{ fontSize: "20px" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchField;
