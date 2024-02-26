import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useAuth } from '../Context';
import { NavLink } from 'react-router-dom';

function ProfiledropD() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user, setUser] = useAuth()
  const handleLogout = () => {
    localStorage.removeItem("USER")
    setUser(null)
  }
  const login = [{ name: "profile", icon: <Avatar /> },
  { name: "my account", icon: <Avatar /> },
  { name: "settings", icon: <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon> },
  {
    name: "", icon: <> 
     <ListItemIcon> <Logout fontSize="small" /></ListItemIcon>
      <NavLink className="navlink" onClick={handleLogout} to = "/">Logout</NavLink>
      </>
  }
  ]

  const notlogin = [
    { name: "", icon:<>
    <Avatar /> 
    <NavLink className="navlink" onClick={handleLogout} to = "/">Login</NavLink>
    </> },
  { name: "", icon: <>
   <Avatar />
   <NavLink className="navlink" onClick={handleLogout} to = "/signup">Register</NavLink>
   </> }
  ]

  const userAuth = { user: user !== null ? login : notlogin };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>


        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{user?.userinfo?.name?.substring(0, 1)}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userAuth.user.map((u,i) => (
          <MenuItem onClick={handleClose} key={i+1}>
            {u.icon} {u.name}
          </MenuItem>
        ))}




      </Menu>
    </>
  );
}
export default ProfiledropD