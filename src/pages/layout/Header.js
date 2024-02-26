import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';import ProfiledropD from '../ProfiledropD';

const tabs = [
  { name: "cards", endpoint: "/cards" },
  { name: "modals", endpoint: "/modals" },
  { name: "forms", endpoint: "/forms" },
  { name: "table", endpoint: "/table" },
]

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* ============================================================ desktop ======================================== */}
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MUI components
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {tabs.map((t, index) => (
              <NavLink key={index + 1} to={t.endpoint} className="navlink">

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>

                  {t.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          {/* ============================================================ mobile ======================================== */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {tabs.map((t, index) => (
                <MenuItem key={index + 1} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">

                    <NavLink to={t.endpoint}  className="navlink">{t.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MUI components
          </Typography>

          {/* ================================================== ========================================= ============================================= */}
       <ProfiledropD/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;