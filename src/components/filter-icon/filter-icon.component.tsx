import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";

const FilterIcon = function FilterIcon() {
  return (
    <SvgIcon
      color="icons"
      component={filter}
      sx={{ height: "12px" }}
      inheritViewBox
    />
  );
};

export default FilterIcon;
