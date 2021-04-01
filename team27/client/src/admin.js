import React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import resume from './resume.png'
import camera from './images/camera.png'
import ground from './images/ground.jpg'
import './admin.css'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
import Explore from './Explore/Explore';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Login from './Login/Login'
import {NavExplore} from "./NavBar"

const data = [
  { argument: 1, value: 25 },
  { argument: 3, value: 20 },
  { argument: 5, value: 30 },
  { argument: 7, value: 60 },
  { argument: 9, value: 50 },
  { argument: 11, value: 60 },
];


const drawerWidth = 170;


const useStyles1 = makeStyles((theme) => ({
  root: {
   
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
    color: "white",
    marginTop: 10,
    display: 'block'
  },



  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    display: 'flex',
    width: 100,
    height: 100,
    marginTop: 20
  },
  typography: {
    color: "white",
    fontSize: 25,
  },

 
}));
export default function Admin() {
  const classes = useStyles1();


    return(
        <div  className={classes.root}  >
          <NavExplore className="nav"/>


        {/* <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
           <div >
             <img className="landingPic1" src={resume} />
          </div>

          <Divider style={{marginTop: 10}}/>
            <MyButton id='b'>Overview</MyButton>
      </Drawer> */}










    <main className={classes.content}> 

     <h1 id='head'>Overview</h1>


  
  
    <div style={{ display: 'flex' }}>
   
    <Grid item xs={3} >
        <Card id="car" className="bg-dark text-white" >
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Feedbacks
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
    </Grid>

    <Grid item xs={3} >
        <Card id="car" className="bg-dark text-white">
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Total Posts
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
    </Grid>


    <Grid item xs={3}>
        <Card id="car" className="bg-dark text-white">
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Current Users
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
    </Grid>


    <Grid item xs={3}>
        <Card id="car" className="bg-dark text-white">
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Total Users
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
    </Grid>

    </div>
    <Chart
    style={{ marginLeft: 150 , marginTop: 40}}
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







