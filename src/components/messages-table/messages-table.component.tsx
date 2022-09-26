import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CategoryItem } from "../../store/messages/messages.types";
import Card from "../card/card.component";

import globalStyles from "../../utils/styles/style-vars";
import PopUp from "../popup/popup.component";
import SortIcon from "../sort-icon/sort-icon.component";
import FilterIcon from "../filter-icon/filter-icon.component";

import { FilterDataType } from "../../utils/types/types";

import MessagesPagination from "../messages-pagination/messages-pagination.component";
import SortComponent from "../sort/sort.component";
import MessageSkeleton from "../message-skeleton/message-skeleton.component";

type MessagesTableType = {
  rows: string[];
  selected: string[];
  data: CategoryItem[];
  perPageVariants: number[];
  filterItems: FilterDataType[];
};

const MessagesTable: React.FC<MessagesTableType> = function MessagesTable({
  rows,
  data,
  selected,
  perPageVariants,
  filterItems,
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [choosenEl, setChoosenEl] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(perPageVariants[0]);

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
            <SortComponent
              id="sort"
              handleClick={handleClick}
              logo={<SortIcon />}
              anchorEl={anchorEl}
              choosenEl={choosenEl}
              handleClose={handleClose}
              menuItems={[
                { title: "Sort in asc order", data: "asc" },
                { title: "Sort in desc order", data: "desc" },
              ]}
            />
            <SortComponent
              id="filter"
              handleClick={handleClick}
              logo={<FilterIcon />}
              anchorEl={anchorEl}
              choosenEl={choosenEl}
              handleClose={handleClose}
              menuItems={filterItems}
            />
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
          {data.length > 0 ? (
            visibleItems
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((message) => {
                return (
                  <Card data={message} selected={selected} key={message.id} />
                );
              })
          ) : (
            <MessageSkeleton rows={rows} />
          )}
        </TableBody>
      </Table>
      <MessagesPagination
        rowsPerPageVariants={perPageVariants}
        data={visibleItems}
        perPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MessagesTable;
