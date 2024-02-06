
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";
import { Button, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import logo from "../images/logo1.png";

const SideBar = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Drawer
    variant="permanent"
    open={drawerOpen}
    sx={{
      width: { sm: 240, xs: 100, md: "100%" },
      flexShrink: 0,
      "& .MuiDrawer-paper": {},
    }}
  >
      <Toolbar>
      <IconButton onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}>
          {drawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        <img
          src={logo}
          alt="Logo"
          style={{
            width: "100px",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
        />
        <IconButton>{/* <MenuIcon /> */}</IconButton>
      </Toolbar>
      <div>
        <Link to="Dashboard" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: isActive("/Admin/dashboard")
                ? "#1769aa"
                : "white",
              width: "100%",
              textTransform: "none",
              justifyContent: "flex-start",
              marginTop: "10px",
              fontSize: "md",
              color: "#1769aa",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginBottom: "20px",
              textAlign: "center",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#1769aa",
                color: "white",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <DashboardSharpIcon sx={{ marginRight: "4px" }} />
              <span sx={{ flexGrow: 1, textAlign: "start" }}>Dashboard</span>
            </Typography>
          </Button>
        </Link>

        <Link to="Professional Listing" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: isActive("/professionalListing")
                ? "#1769aa"
                : "white",
              width: "100%",
              textTransform: "none",
              justifyContent: "flex-start",
              fontSize: "md",
              color: "#1769aa",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginBottom: "20px",
              textAlign: "center",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#1769aa",
                color: "white",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ClearAllSharpIcon sx={{ marginRight: "4px" }} />
              <span sx={{ flexGrow: 1, textAlign: "start" }}>
                Professional Listing
              </span>
            </Typography>
          </Button>
        </Link>

        <Link to="Client Listing" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: isActive("/clientListing") ? "#1769aa" : "white",
              width: "100%",
              textTransform: "none",
              justifyContent: "flex-start",
              fontSize: "md",
              color: "#1769aa",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginBottom: "20px",
              textAlign: "center",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#1769aa",
                color: "white",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            > 
              <ClearAllSharpIcon sx={{ marginRight: "4px" }} />
              <span sx={{ flexGrow: 1, textAlign: "start" }}>
                Client Listing
              </span>
            </Typography>
          </Button>
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-secondary border-0"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            endIcon={<ArrowDropDownIcon />}
            style={{
              backgroundColor: "white",
              width: "100%",
              marginTop: "10px",
              fontSize: "medium",
              color: "#1769aa",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginBottom: "20px",
              textAlign: "left",
              boxShadow: "none",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1769aa";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#1769aa";
            }}
          >
            <span style={{ marginRight: "4px" }}>
              <i className="bi bi-person-fill"></i>{" "}
              <SupportAgentSharpIcon sx={{ marginRight: "4px" }} />
            </span>
            All Requests
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Currently Active
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Closed Requests
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Hired Request
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary border-0"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            endIcon={<ArrowDropDownIcon />}
            style={{
              backgroundColor: "white",
              width: "100%",
              marginTop: "10px",
              fontSize: "medium",
              color: "#1769aa",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginBottom: "20px",
              textAlign: "left",
              boxShadow: "none",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1769aa";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#1769aa";
            }}
          >
            <span style={{ marginRight: "4px" }}>
              <i className="bi bi-person-fill"></i>{" "}
              <SupportAgentSharpIcon sx={{ marginRight: "4px" }} />
            </span>
            Customer Support
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Open Tickets
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Close Tickets
              </a>
            </li>
          </ul>
        </div>

        <Link to="Setting Page" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: isActive("settingPage") ? "#1769aa" : "white",
              width: "100%",
              textTransform: "none",
              justifyContent: "flex-start",
              fontSize: "md",
              color: "#1769aa",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginBottom: "20px",
              textAlign: "center",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#1769aa",
                color: "white",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <SettingsSharpIcon sx={{ marginRight: "4px" }} />
              <span sx={{ flexGrow: 1, textAlign: "start" }}>Setting</span>
            </Typography>
          </Button>
        </Link>
        
      </div>
    </Drawer>
  );
};

export default SideBar;
