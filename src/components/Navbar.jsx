import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Exchange Rates (Live)", path: "/exchange_rate" },
  { name: "About", path: "/about" },
  { name: "Error Page", path: "/error_page" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const { isDarkMode, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (name) => {
    setActivePage(name);
    setDrawerOpen(false);
  };

  const darkStyles = {
    backgroundColor: "#272727",
    color: "#fff",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: isDarkMode
            ? darkStyles.backgroundColor
            : "primary.main",
        }}
      >
        <Toolbar>
          {/* Hamburger Menu (visible only on small screens) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* App Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>

          {/* NavLinks (only visible on md and up) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map(({ name, path }) => (
              <Button
                key={name}
                component={NavLink}
                to={path}
                onClick={() => handleNavClick(name)}
                sx={{
                  fontSize: 15,
                  color: "white",
                  backgroundColor:
                    activePage === name
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </Button>
            ))}
            <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              <Switch checked={isDarkMode} onChange={toggleTheme} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            backgroundColor: isDarkMode ? darkStyles.backgroundColor : "#fff",
            height: "100%",
          }}
        >
          <List sx={{ paddingLeft: 1 }}>
            {navLinks.map(({ name, path }) => (
              <ListItem
                button
                key={name}
                component={NavLink}
                to={path}
                onClick={() => handleNavClick(name)}
                sx={{
                  fontSize: 15,
                  color: isDarkMode ? "#fff" : "#000",
                  backgroundColor: activePage === name ? "#1976D2" : "default",
                }}
              >
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
