import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../components/sideBar';
import Dashboard from './dashboard';
import ProfessionalListing from './professionalListing';
import ClientListing from './clientListing';
import Navbar from '../components/Navbar';
import MiniDrawer from '../components/miniDarwer/MiniDrawer';
// import MiniDrawer from '../components/miniDarwer/MiniDrawer';


const Admin = () => (
      
        <div style={{ overflowY: 'auto',  width:"100%"}}>
          
          <MiniDrawer/>
          </div>
  );
  
  export default Admin;
