import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import logo from './img/log1.png';
import akj from './img/logoakj.png';

import './Navbar.css'


const drawerWidth = 240;
const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
  { name: 'Resume', id: 'resume', downloadLink: '/Anjith.pdf' }
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };



 
  const container = window !== undefined ? () => window().document.body : undefined;
 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={akj} alt="Logo" className="drawer-logo" style={{ height: '60px', margin: '0.1rem auto', display: 'block' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            {item.name === "Resume" ? (
              <a
                href={item.downloadLink}
                download
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <ListItemButton>
                  <ListItemText primary={item.name} sx={{ color: '#2ABCE47F' }} />
                </ListItemButton>
              </a>
            ) : (
              <ListItemButton onClick={() => handleNavClick(item.id)}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <div className="fullco">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ height: '70px', backgroundColor: '#000', position: 'fixed' }}>
  <Toolbar>
    {/* Desktop View (sm and up): Logo on left, nav buttons on right */}
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        width: '100%',
        alignItems: 'center'
      }}
    >
      {/* Logo on the left */}
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" className="logoakj" />
      </Typography>

      {/* Navigation Buttons on the right */}
      <Box sx={{ ml: 'auto', display: 'flex' }}>
        {navItems.map((item) =>
          item.name === 'Resume' ? (
            <Button
              key={item.id}
              sx={{ color: '#fff', mx: 2, '&:hover': { color: '#2ABCE47F' } }}
              component="a"
              href={item.downloadLink}
              download
            >
              {item.name}
            </Button>
          ) : (
            <Button
              key={item.id}
              sx={{ color: '#fff', mx: 2, '&:hover': { color: '#2ABCE47F' } }}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </Button>
          )
        )}
      </Box>
    </Box>

    {/* Mobile View (xs): Menu icon on left, logo on right */}
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        width: '100%',
        alignItems: 'center'
      }}
    >
      {/* Menu Icon on the left */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Spacer automatically pushes logo to right */}
      <Box sx={{ ml: 'auto' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" className="logoakj" />
        </Typography>
      </Box>
    </Box>
  </Toolbar>
</AppBar>

        <Box component="nav">
        <Drawer
  container={container}
  variant="temporary"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{ keepMounted: true }}
  sx={{
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
      backgroundColor: '#000',
      color: '#2ABCE47F',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '1rem'
    },
  }}
>
  {drawer}
</Drawer>

        </Box>
      </Box>





    </div>
  );
}

export default Navbar;
