import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo1.png";
import "./Navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from "@mui/material";
import Avatar from '@mui/joy/Avatar';

function Navbar() {
  const location = useLocation();
  const isExploreActive = location.pathname === "/Explore";

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {/* <li className="nav-item">
              <Typography className="mr-3" >
                <span>aa.khowaja20@gmail.com</span>
              </Typography>
            </li>
            <li className="nav-item">
              <Avatar variant="plain" className="3" />
            </li> */}

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
    <div>
        <Avatar variant="plain" className="4" />
    </div>
    <div style={{ flex: 1 }}>
        <Typography className="mr-4" style={{ color: 'gray', fontSize: 'small' }}> 
            <span>aashir
                <br />
                
                aa.khowaja20@gmail.com
            </span>
        </Typography>
    </div>
</div>
            <li className="nav-item">
              <Link className="nav-link" to="Login">
                <LogoutIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
