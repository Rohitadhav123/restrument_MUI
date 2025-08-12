import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from "react-router-dom"
import "../../styles/HeaderStyle.css"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawer} sx={{ textAlign: 'center', bgcolor: 'black', height: '100%' }}>
      <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon /> My Resturant
      </Typography>

      {/* Mobile Menu Styling */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/menu">Menu</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link></li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1 }}>
              <FastfoodIcon /> My Resturant
            </Typography>
    <Divider/>
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', sm: "block" } }}>
              <ul className="navigation-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawer}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default Header
