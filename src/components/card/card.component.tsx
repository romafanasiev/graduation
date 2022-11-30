import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CategoryItem } from '../../store/messages/messages.types';
import { deleteMessage } from '../../firebase';

import { getMessagesFetch } from '../../store/messages/messages.reducer';
import { cardStyle } from './Card.styles';

type Props = {
  data: CategoryItem;
  selected: string[];
};

export const Card: FC<Props> = ({ data, selected }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    await deleteMessage(data);
    dispatch(getMessagesFetch());
    setAnchorEl(null);
  };
  const theme = useTheme();
  const { priority } = data;
  let priorityClass: { backgroundColor: string };

  if (priority === 'low') {
    priorityClass = cardStyle.prioritylow;
  } else if (priority === 'high') {
    priorityClass = cardStyle.priorityhigh;
  } else {
    priorityClass = cardStyle.prioritynormal;
  }

  return (
    <TableRow key={data.id} hover>
      {selected.map((string, index) => {
        if (index === 0) {
          return (
            <TableCell
              component="th"
              scope="row"
              key={string}
              color="primary"
              sx={{ borderColor: theme.palette.divider }}
            >
              <NavLink
                to={`/admin/messages/${data.id}`}
                className="message-link"
              >
                <Box sx={cardStyle.user}>
                  <Avatar
                    alt={data.name}
                    src={data.avatar}
                    sx={cardStyle.avatar}
                  />
                  {data[string as keyof CategoryItem]}
                </Box>
              </NavLink>
            </TableCell>
          );
        }
        if (string === 'priority') {
          return (
            <TableCell
              component="th"
              scope="row"
              key={string}
              sx={{ borderColor: theme.palette.divider }}
            >
              <NavLink
                to={`/admin/messages/${data.id}`}
                className="message-link"
              >
                <Typography
                  sx={Object.assign(cardStyle.priority, priorityClass)}
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
            key={string}
            sx={{ borderColor: theme.palette.divider }}
          >
            <NavLink to={`/admin/messages/${data.id}`} className="message-link">
              {data[string as keyof CategoryItem]}
            </NavLink>
          </TableCell>
        );
      })}
      <TableCell
        component="th"
        scope="row"
        sx={{ borderColor: theme.palette.divider }}
      >
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
              vertical: 'center',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
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
            <MenuItem onClick={handleDelete}>Delete message</MenuItem>
          </Menu>
        </Box>
      </TableCell>
    </TableRow>
  );
};
