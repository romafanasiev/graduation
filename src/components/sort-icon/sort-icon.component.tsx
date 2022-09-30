import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as sort } from "../../assets/icons/sort.svg";

const SortIcon = function SortIcon() {
  return (
    <SvgIcon
      component={sort}
      color="icons"
      sx={{ height: "12px" }}
      inheritViewBox
    />
  );
};

export default SortIcon;
