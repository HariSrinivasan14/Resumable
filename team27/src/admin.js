import logo, { ReactComponent } from './logo.svg'; 
import React, { useDebugValue } from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import buttonGroup from '@material-ui/core/ButtonGroup'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import { withRouter } from "react-router-dom"
import Typography from '@material-ui/core/Typography'
import resume from './resume.png'
import TextField from '@material-ui/core/TextField';
import { palette, spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import graph from './graph.png'
import './admin.css'
import Profile from './profile';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {MuiThemeProvider} from "@material-ui/core/styles";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

const MyButton = styled(Button)({
  marginRight: 50,
  color: "white",
});

const MyButton2 = styled(Button)({
  marginRight: 50,
  marginLeft: 200,
  color: 'white',
});

const MyButton3 = styled(Button)({
  position: "absolute",
  right: 30,
  color: 'white',
  width: 120,
  
});





const defaultProps = {
  bgcolor: '71A89E',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '11.2rem', height: '1.5rem' },
  padding: 1,
  marginBottom: 0,
  marginLeft: 5,
  
};
const default1Props = {
  bgcolor: '71A89E',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '2rem', height: '1.5rem' },
  padding: 1,
  marginBottom: 0,
  marginLeft: 25,
  
  
};
const drawerWidth = 170;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
  
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  
 
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:'#71A89E'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#71A89E'
  },
  list:{
    color: "white"
  },

 
}));
export default function PermanentDrawerLeft() {
  const classes = useStyles();

  

    return(

      
      
     
        
        <div  className={classes.root}>
        <AppBar className={classes.appBar} style={{ backgroundColor:'#71A89E'}} position="fixed" >
          <Toolbar>
          <img className="landingPic" src={resume} />
            <MyButton2 variant="outlined">
              Admin
            </MyButton2 >

            <MyButton variant="outlined" href="Profile">
              Profile
            </MyButton>

            <MyButton variant="outlined">
              Help
            </MyButton>

            <MyButton3 variant="outlined">
              Log out
            </MyButton3>
           
          </Toolbar>
        </AppBar>



        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.list}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.list}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>










    <main className={classes.content}>

     <h1>Overview</h1>


  
  

    <Box style={{ marginLeft: 200 }} 
      display="flex" 
      justifyContent="left"
      >
      <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Feedbacks</Box>
      <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Posts</Box>
      <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Current Users</Box>
      <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Total Users</Box>
    </Box> 
    <Box style={{ marginLeft: 80 }} display="flex" justifyContent="left">
      <Box alignContent="center" borderRadius={16} {...default1Props}>55</Box>
      <Box alignContent="center" borderRadius={16} {...default1Props}>255</Box>
      <Box alignContent="center" borderRadius={16} {...default1Props}>89</Box>
      <Box alignContent="center" borderRadius={16} {...default1Props}>190</Box>
    </Box>

    <img className="graphPic" src={graph} />
 


    </main>
    
    </div>
     
   
      )
  } 







