import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, MenuItem, Stack, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { RootState, useAppDispatch } from '../../store/store';
import globalStyles from '../../styles/style-vars';
import { signOut } from '../../store/user/user.reducer';
import { userInfoStyles } from './UserInfo.styles';

export const UserInfo: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const avatar = useSelector((state: RootState) => state.user.avatar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  };

  return (
    <Stack
      direction="row"
      spacing="14px"
      justifyContent="center"
      alignItems="center"
    >
      <Divider orientation="vertical" />
      <Typography variant="h4" sx={{ padding: '0 0 0 18px' }}>
        {user ? user.displayName : 'LOGIN'}
      </Typography>
      <Button
        sx={{
          overflow: 'hidden',

          padding: '0',

          minWidth: '46px',
          height: '46px',

          borderRadius: '50%',
          border: `2px solid ${globalStyles.vars.icons}`,

          backgroundColor: globalStyles.vars.whiteColor,
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {avatar ? (
          <Avatar src={avatar} sx={userInfoStyles.avatar} />
        ) : (
          <Avatar sx={userInfoStyles.avatar}>
            <AccountCircleIcon color="icons" sx={userInfoStyles.avatarIcon} />
          </Avatar>
        )}
      </Button>
      <Menu
        disableScrollLock
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/photo" className="link">
            Add photo
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/reset" className="link">
            Change password
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};
