import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useNavigate, useLocation } from 'react-router-dom';
import Profile from './Profile';

const pages = ['Write it out!', 'Ask a Question!', 'Read'];
const settings = ['Profile', 'Dashboard'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userName, setUserName] = React.useState(() => {
    return localStorage.getItem('userName') || '';
  });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (setting) => {
    if (setting === 'Profile') {
      setIsProfileOpen(true);
    } else {
      navigate('/dashboard');
    }
    setAnchorElUser(null);
  };
  const handleProfileClose = (name) => {
    setIsProfileOpen(false);
    if (name) {
      setUserName(name);
      localStorage.setItem('userName', name);
    }
  };
  const getAvatarContent = () => {
    if (userName) {
      return userName.split(' ').map(word => word[0]).join('').toUpperCase();
    }
    return 'U';
  };
  const handleNavigation = (page) => {
    if (page === 'Write it out!') {
      navigate('/writing');
    } else if (page === 'Ask a Question!') {
      navigate('/question');
    } else {
      navigate('/read');
    }
    handleCloseNavMenu();
  };

  const isActive = (path) => {
    if (path === 'Write it out!' && location.pathname === '/writing') return true;
    if (path === 'Ask a Question!' && location.pathname === '/question') return true;
    if (path === 'Read' && location.pathname === '/read') return true;
    return false;
  };

  const activeStyle = {
    background: '#e4e9f5',
    color: 'blue',
  };

  return (
    <AppBar position="sticky" 
    sx={{ 
      top: 0,
      zIndex: (theme) => theme.zIndex.drawer + 1 
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HistoryEduIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PenDown
          </Typography>

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
              {pages.map((page) => (  
                <MenuItem 
                  key={page} 
                  onClick={() => handleNavigation(page)}
                  sx={isActive(page) ? activeStyle : {}}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HistoryEduIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#landing_page"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PenDown
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  ...(isActive(page) ? activeStyle : {})
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="U">{getAvatarContent()}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Profile open={isProfileOpen} onClose={handleProfileClose} />
    </AppBar>
  );
}
export default ResponsiveAppBar;