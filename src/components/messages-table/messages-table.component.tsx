import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { CategoryItem } from "../../store/messages/messages.types";
import Card from "../card/card.component";

import globalStyles from "../../utils/styles/style-vars";
import PopUp from "../popup/popup.component";
import SortIcon from "../sort-icon/sort-icon.component";
import FilterIcon from "../filter-icon/filter-icon.component";

import messageTableStyles from "./messages-table.styles";

type MessagesTableType = {
  rows: string[];
  selected: string[];
  data: CategoryItem[];
};

const MessagesTable: React.FC<MessagesTableType> = function MessagesTable({
  rows,
  data,
  selected,
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [choosenEl, setChoosenEl] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setChoosenEl(event.currentTarget.id);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    const { filter, sort } = event.currentTarget.dataset;
    if (filter) {
      setFilterBy(filter);
    } else if (sort) {
      setSortOrder(sort);
    }
    setAnchorEl(null);
    setChoosenEl("");
  };

  let visibleItems = [...data];

  if (filterBy) {
    if (filterBy === "none") {
      visibleItems = [...data];
    }
    if (sortOrder === "asc") {
      visibleItems = visibleItems.sort((prev, next) => {
        return String(prev[filterBy as keyof CategoryItem]).localeCompare(
          String(next[filterBy as keyof CategoryItem]),
        );
      });
    }
    if (sortOrder === "desc") {
      visibleItems = visibleItems.sort((prev, next) => {
        return String(next[filterBy as keyof CategoryItem]).localeCompare(
          String(prev[filterBy as keyof CategoryItem]),
        );
      });
    }
  }

  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          margin: "37px 32px 47px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "34px",
            }}
          >
            <Button
              aria-label="more"
              aria-haspopup="true"
              id="sort-button"
              onClick={handleClick}
              startIcon={<SortIcon />}
              sx={messageTableStyles.sorting}
              disableRipple
            >
              Sort
            </Button>
            <Menu
              id="sort-menu"
              anchorEl={anchorEl}
              open={choosenEl.includes("sort")}
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
              <MenuItem onClick={handleClose} data-sort="asc">
                Sort in asc order
              </MenuItem>
              <MenuItem onClick={handleClose} data-sort="desc">
                Sort in desc order
              </MenuItem>
            </Menu>

            <Button
              aria-label="more"
              aria-haspopup="true"
              id="filter-button"
              onClick={handleClick}
              startIcon={<FilterIcon />}
              sx={messageTableStyles.sorting}
              disableRipple
            >
              Filter
            </Button>
            <Menu
              id="filter-menu"
              anchorEl={anchorEl}
              open={choosenEl.includes("filter")}
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
              <MenuItem onClick={handleClose} data-filter="message">
                Filter by message
              </MenuItem>
              <MenuItem onClick={handleClose} data-filter="name">
                Filter by name
              </MenuItem>
              <MenuItem onClick={handleClose} data-filter="date">
                Filter by date
              </MenuItem>
              <MenuItem onClick={handleClose} data-filter="priority">
                Filter by priority
              </MenuItem>
              <MenuItem onClick={handleClose} data-filter="none">
                Clear filter
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <PopUp />
      </Box>
      <Table sx={{ minWidth: 320 }}>
        <TableHead>
          <TableRow>
            {rows.map((row) => {
              return (
                <TableCell
                  key={row}
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.2px",
                    color: globalStyles.vars.greyColor,
                    textAlign: row === "Priority" ? "center" : "start",
                  }}
                >
                  {row}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleItems
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((message) => {
              return (
                <Card data={message} selected={selected} key={message.id} />
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        SelectProps={{
          MenuProps: { disableScrollLock: true },
          sx: { margin: "0 50px 0 0" },
        }}
        rowsPerPageOptions={[2, 4, 8]}
        component="div"
        count={visibleItems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MessagesTable;
