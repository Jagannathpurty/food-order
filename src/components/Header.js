import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/Headerstyle.css";
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  //hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        varient="h6"
        component="div"
        sx={{ flexGrow: 1, my:2 }}
      >
        <FastfoodIcon />
        My Resturant
      </Typography>
      <Divider/>

      <ul class="mobile-navigation">
        <li>
          {" "}
          <Link to={"/Resturant-Website-React-js"}>Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/menu"}>Menu</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/about"}>About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/contact"}>Contact</Link>{" "}
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"goldenrod"}
            varient="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <FastfoodIcon />
            My Resturant
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul class="navigation-menu">
              <li>
                {" "}
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/menu"}>Menu</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/about"}>About</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/contact"}>Contact</Link>{" "}
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          varient="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none", "& .MuiDrawer-paper": {boxSizing: "border-box", width:"200px"} } }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
      <Toolbar/>
      </Box>
    </Box>
  );
}

export default Header;
