import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import globalStyles from "../../utils/styles/style-vars";

function SearchField(): React.ReactElement {
  return (
    <TextField
      variant="standard"
      sx={{
        margin: "0 0 0 20px",
        padding: "0 0 0 12px",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: globalStyles.vars.whiteGrayColor,
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
