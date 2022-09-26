import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import { FilterDataType } from "../../utils/types/types";

import sortStyles from "./sort.styles";

type Props = {
  id: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  logo: React.ReactNode;
  anchorEl: null | HTMLElement;
  choosenEl: string;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  menuItems: FilterDataType[];
};

const SortComponent: React.FC<Props> = function SortComponent({
  id,
  handleClick,
  logo,
  anchorEl,
  choosenEl,
  handleClose,
  menuItems,
}) {
  return (
    <>
      <Button
        aria-label="more"
        aria-haspopup="true"
        id={`${id}-button`}
        onClick={handleClick}
        startIcon={logo}
        sx={sortStyles}
        disableRipple
      >
        {`${id[0].toUpperCase()}${id.slice(1)}`}
      </Button>
      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={choosenEl.includes(id)}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        {menuItems.map((item) => {
          if (id === "sort") {
            return (
              <MenuItem onClick={handleClose} data-sort={item.data}>
                {item.title}
              </MenuItem>
            );
          }
          return (
            <MenuItem onClick={handleClose} data-filter={item.data}>
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default SortComponent;
