import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import logo from "../../images/logo1.png";
import { Avatar } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import Dashboard from '../../screens/dashboard';
import ProfessionalListing from '../../screens/professionalListing';
import ClientListing from '../../screens/clientListing';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSubMenuOpen(false);
  };

  const handleItemClick = (link) => {
    navigate(link);

  };

  const handleAllRequestClick = () => {
    setSubMenuOpen((prevSubMenuOpen) => !prevSubMenuOpen); // Toggle submenu open/close
  };

  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden', width:'100%', height:'100vh', zIndex:100 }}>
      <CssBaseline /> 
      <AppBar position="fixed" open={open} className='BG-nav' sx={{ height: 60, backgroundColor:'white' }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Typography variant="body2" sx={{ ml: 1, color: 'gray', display: { xs: 'none', sm: 'block' } }}>
              <span>aashir</span>
              <br />
              aa.khowaja20@gmail.com
            </Typography>
            <Avatar variant="plain" className="4" sx={{ ml: 1 }} />
            <IconButton color="gary" sx={{ display: { xs: 'none', sm: 'block' } }}
              onClick={() => navigate('/login')}
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>

        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardSharpIcon />, link: '/Admin/dashboard' },
            { text: 'Professional Listing', icon: <ClearAllSharpIcon />, link: '/Admin/ProfessionalListing' },
            { text: 'Client Listing', icon: <PersonIcon />, link: '/Admin/ClientListing' },
            {
              text: 'All Request',
              icon: <ClearAllSharpIcon />,
              subMenu: [
                { text: 'Currently Active', link: '/Admin/AllRequest/CurrentlyActive' },
                { text: 'Closed Requests', link: '/Admin/AllRequest/ClosedRequests' },
                { text: 'Hired Request', link: '/Admin/AllRequest/HiredRequest' },
              ],
            },
            { text: 'Customer Support', icon: <SupportAgentSharpIcon /> },
          ].map((item, index) => (
            <React.Fragment key={item.text}>
              <ListItem
                disablePadding
                onClick={() => (item.subMenu ? handleAllRequestClick() : handleItemClick(item.link))}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    width: '100%', // Take the full width
                    textAlign: 'left', // Align text to the left
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)', // Add a subtle hover effect
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  />
                  {item.subMenu && (
                    <IconButton
                      sx={{ marginLeft: 'auto' }}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleAllRequestClick();
                      }}
                    >
                      {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  )}
                </ListItemButton>
              </ListItem>
              {item.subMenu && (
                <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subMenu.map((subItem) => (
                      <ListItem
                        key={subItem.text}
                        disablePadding
                        onClick={() => handleItemClick(subItem.link)}
                      >
                        <ListItemButton sx={{ paddingLeft: 4 }}>
                          <ListItemText primary={subItem.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",overflow: "hidden", }}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path='/ProfessionalListing' element={<ProfessionalListing />} />
          <Route path='/ClientListing' element={<ClientListing />} />
          <Route path='/CurrentlyActive' element={<ClientListing />} /> 
          <Route path='/ClosedRequests' element={<ClientListing />} /> 
          <Route path='/HiredRequest' element={<ClientListing />} /> 

        </Routes>
      </Box>
    </Box>
  );
}

