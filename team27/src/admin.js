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
import camera from './camera.png'
import ground from './ground.jpg'
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
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
function createData(time, amount) {
  return { time, amount };
}

const data = [
  { argument: 1, value: 10 },
  { argument: 3, value: 20 },
  { argument: 5, value: 30 },
  { argument: 7, value: 60 },
  { argument: 9, value: 50 },
  { argument: 11, value: 60 },
];


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
    backgroundImage: ground
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


  card: {
    display: 'flex',
    backgroundColor: "#71A89E",
    width: 400,
    marginLeft: 80
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 180,
  },
  typography: {
  
    fontSize: 25,
  },

 
}));
export default function PermanentDrawerLeft() {
  const classes = useStyles();


    return(
        <div  className={classes.root}  >
        <AppBar className={classes.appBar} style={{ backgroundColor:'#71A89E'}} position="fixed" >
          <Toolbar>
          
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
        <div >
        <img className="landingPic" src={resume} />
          </div>
       
          <Divider style={{marginTop: 10}} />
        <List className={classes.list}>
          {['Overview', 'Posts', 'Feed'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.list}>
          {['Resumes', 'Trash'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>










    <main className={classes.content}> 

     <h1>Overview</h1>


  
  
    <div style={{ display: 'flex' }}>
   
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Number Of Feedbacks
              </Typography>
              <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              92
              </Typography>
              <Typography variant="subtitle1" color="primary">
                More Details
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={camera}  />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>

    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Number Of Total Posts
              </Typography>
              <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              73
              </Typography>
              <Typography variant="subtitle1" color="primary">
                More Details
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={camera}  />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>


    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Number Of Current Users
              </Typography>
              <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              43
              </Typography>
              <Typography variant="subtitle1" color="primary">
                More Details
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={camera}  />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>


    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Number Of Total Users
              </Typography>
              <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              64
              </Typography>
              <Typography variant="subtitle1" color="primary">
                More Details
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={camera}  />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>

    </div>
    <Chart
    style={{ marginLeft: 100 , marginTop: 40}}
      data={data}
      width={1200} height={500}
    >
      <ArgumentAxis />
      <ValueAxis />
      

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
 

    </main>
    
    </div>
     
   
      )
  } 







