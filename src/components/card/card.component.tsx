import React from "react";

import { NavLink } from "react-router-dom";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CategoryItem } from "../../store/messages/messages.types";

import cardStyles from "./card.styles";

type Props = {
  data: CategoryItem;
  selected: string[];
};

const Card: React.FC<Props> = function Card({ data, selected }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { priority } = data;
  let priorityClass: { backgroundColor: string };

  if (priority === "low") {
    priorityClass = cardStyles.prioritylow;
  } else if (priority === "high") {
    priorityClass = cardStyles.priorityhigh;
  } else {
    priorityClass = cardStyles.prioritynormal;
  }

  return (
    <TableRow key={data.id} sx={cardStyles.row}>
      {selected.map((string, index) => {
        if (index === 0) {
          return (
            <TableCell
              component="th"
              scope="row"
              sx={cardStyles.cell}
              key={string}
            >
              <NavLink
                to={`/admin/messages/${data.id}`}
                className="message-link"
              >
                <Box sx={cardStyles.user}>
                  <Avatar
                    alt={data.name}
                    src={data.avatar}
                    sx={cardStyles.avatar}
                  />
                  <Typography sx={cardStyles.text}>
                    {data[string as keyof CategoryItem]}
                  </Typography>
                </Box>
              </NavLink>
            </TableCell>
          );
        }
        if (string === "priority") {
          return (
            <TableCell
              component="th"
              scope="row"
              sx={cardStyles.cell}
              key={string}
            >
              <NavLink
                to={`/admin/messages/${data.id}`}
                className="message-link"
              >
                <Typography
                  sx={Object.assign(cardStyles.priority, priorityClass)}
                >
                  {priority}
                </Typography>
              </NavLink>
            </TableCell>
          );
        }
        return (
          <TableCell
            component="th"
            scope="row"
            sx={cardStyles.cell}
            key={string}
          >
            <NavLink to={`/admin/messages/${data.id}`} className="message-link">
              <Typography sx={cardStyles.text}>
                {data[string as keyof CategoryItem]}
              </Typography>
            </NavLink>
          </TableCell>
        );
      })}
      <TableCell component="th" scope="row">
        <Box>
          <IconButton
            aria-label="more"
            aria-haspopup="true"
            id="message-button"
            onClick={handleClick}
          >
            <MoreVertIcon color="icons" />
          </IconButton>
          <Menu
            id="message-menu"
            anchorEl={anchorEl}
            open={open}
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
            <MenuItem onClick={handleClose}>
              <NavLink
                to={`/admin/messages/${data.id}`}
                className="message-link"
              >
                More info
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>Delete message</MenuItem>
          </Menu>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default Card;
