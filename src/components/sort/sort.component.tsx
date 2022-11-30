import React, { FC } from 'react';
import { Button, Menu, MenuItem, useTheme } from '@mui/material';
import { FilterDataType } from '../../types/types';

type Props = {
  id: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  logo: React.ReactNode;
  anchorEl: null | HTMLElement;
  choosenEl: string;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  menuItems: FilterDataType[];
};

export const SortComponent: FC<Props> = ({
  id,
  handleClick,
  logo,
  anchorEl,
  choosenEl,
  handleClose,
  menuItems,
}) => {
  const theme = useTheme();
  return (
    <>
      <Button
        aria-label="more"
        aria-haspopup="true"
        id={`${id}-button`}
        onClick={handleClick}
        startIcon={logo}
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: theme.palette.text.primary,
        }}
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
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        {menuItems.map((item) => {
          if (id === 'sort') {
            return (
              <MenuItem
                onClick={handleClose}
                data-sort={item.data}
                key={item.title}
              >
                {item.title}
              </MenuItem>
            );
          }
          return (
            <MenuItem
              onClick={handleClose}
              data-filter={item.data}
              key={item.title}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
